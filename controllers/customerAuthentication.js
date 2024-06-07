const User = require('../models/customer')
const Auth = require('../middleware/authMiddleware')
const Customer = require("../models/customer");
const Email = require("../controllers/emailService");

exports.Register = async (req, res, next) => {
    try {
        const { email } = req.body;
        const [[user]] = await User.fetchByEmail(email)
        if (user){
            return res.status(409).json({ responseCode: 409, message: "User may already exist! You can Login to use your account." })
        } else {
            const [result] = await User.create(req.body)
            const [[customer]] = await Customer.fetch(result.insertId)
            await Email.verifyEmail(customer.email)
            res.status(201).json({ responseCode: 201, message: "Successfully Registered!", user: customer })
        }
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password){
            return res.status(400).json({ responseCode: 400, message: "Invalid Data" })
        }
        const [[user]] = await User.fetchByEmail(email)
        if (user) {
            let authenticate = await Auth.comparePassword(user.password, password)
            if (authenticate) {
                let payload = {
                    customer: user.id
                };
                let token = Auth.createToken(payload)
                return res.status(200).json({ responseCode: 200, message: "Login Success", token: token, user: user })
            }
        }
        return res.status(401).json({ responseCode: 401, message: "Invalid Credentials! Failed to Authenticate" })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
