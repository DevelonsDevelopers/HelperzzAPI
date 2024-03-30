const Customer = require('../models/customer')

exports.createPasswordLessCustomer = async (req, res, next) => {
    try {
        const [result] = await Customer.passwordLessCreate(req.body)
        const [[customer]] = await Customer.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Customer Added Successfully", customer: customer })
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
        res.status(201).json({ responseCode: 201, message: "Customer Fetched Successfully", customer: customer })
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
