const Customer = require('../models/customer')
const Email = require('../controllers/emailService')

exports.createPasswordLessCustomer = async (req, res, next) => {
    try {
        const { email } = req.body;
        const [[user]] = await Customer.fetchByEmail(email)
        if (user){
            return res.status(200).json({ responseCode: 200, message: "User may already exist! You can Login to use your account.", customer: user})
        } else {
            const [result] = await Customer.passwordLessCreate(req.body)
            const [[customer]] = await Customer.fetch(result.insertId)
            await Email.customerSetPassword(customer.email)
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

exports.updatePassword = async (req, res, next) => {
    try {
        const [result] = await Customer.updateByToken(req.body)
        let success = false
        let message = "Failed to Update Password"
        if (result.changedRows === 1){
            success = true
            message = "Password Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.setPassword = async (req, res, next) => {
    try {
        const [result] = await Customer.approveByToken(req.body)
        let success = false
        let message = "Failed to Update Password"
        if (result.changedRows === 1){
            success = true
            message = "Password Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.verifyEmail = async (req, res, next) => {
    try {
        const [result] = await Customer.verifyEmail(req.body)
        let success = false
        let message = "Failed to Verify Email"
        if (result.changedRows === 1){
            success = true
            message = "Email Verified Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
