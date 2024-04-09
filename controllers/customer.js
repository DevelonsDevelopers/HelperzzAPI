const Customer = require('../models/customer')
const User = require("../models/customer");

exports.createPasswordLessCustomer = async (req, res, next) => {
    try {
        const { email } = req.body;
        const [[user]] = await User.fetchByEmail(email)
        if (user){
            return res.status(409).json({ responseCode: 409, message: "User may already exist! You can Login to use your account.", customer: user})
        } else {
            const [result] = await Customer.passwordLessCreate(req.body)
            const [[customer]] = await Customer.fetch(result.insertId)
            res.status(201).json({responseCode: 201, message: "Customer Added Successfully", customer: customer})
        }
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getCustomer = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[customer]] = await Customer.fetch(id)
        res.status(200).json({ responseCode: 200, message: "Customer Fetched Successfully", customer: customer })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllCustomers = async (req, res, next) => {
    try {
        const [customers] = await Customer.fetchAll()
        res.status(200).json({ responseCode: 200, message: "Customers fetched successfully", customers: customers })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
