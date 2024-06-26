const Customer = require('../models/customer')
const Email = require('../controllers/emailService')
const RequestContractors = require('../models/requestContractor')
const ContractorProjects = require("../models/contractorProjects");
const ContractorReviews = require("../models/contractorReviews");

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

exports.getProfile = async (req, res, next) => {
    try {
        console.log(res.locals)
        const id = res.locals.payload.customer
        const [[customer]] = await Customer.fetch(id)
        res.status(200).json({ responseCode: 200, message: "Customer Fetched Successfully", customer: customer })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getReviews = async (req, res, next) => {
    try {
        const id = res.locals.payload.customer
        const [reviews] = await Customer.reviews(id)
        res.status(200).json({ responseCode: 200, message: "Reviews Fetched Successfully", reviews: reviews })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getRequests = async (req, res, next) => {
    try {
        const id = res.locals.payload.customer
        const [requests] = await Customer.requests(id)
        for (const request of requests) {
            const [contractors] = await RequestContractors.fetchRequests(request.id)
            request.contractors = contractors
            for (const contractor of contractors) {
                const [reviews] = await ContractorReviews.fetchApprovedByContractor(contractor.id)
                const [[ratings]] = await ContractorReviews.fetchRatings(contractor.id)
                contractor.ratings = ratings
                contractor.reviews = reviews
            }
        }
        res.status(200).json({ responseCode: 200, message: "Requests Fetched Successfully", requests: requests })
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

exports.checkToken = async (req, res, next) => {
    try {
        const { token } = req.params
        const [result] = await Customer.check(token)
        let exist = false
        let message = "Token Expired"
        if (result.length > 0){
            let serverToken = result[0].reset_token
            let serverTime = serverToken.substring(20, 33)
            console.log(serverTime)
            let clientTime = new Date().valueOf()
            console.log(clientTime)
            let Time = Number(clientTime) - Number(serverTime)
            console.log(Time)
            if (Time >= 3600000) {
                exist = false
                message = "Token Expired"
            } else {
                exist = true
                message = "Token Active"
            }
        }
        res.status(202).json({ responseCode: 202, message: message, exist: exist })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateCustomerStatus = async (req, res, next) => {
    try {
        const [result] = await Customer.changeStatus(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1) {
            success = true
            message = "Customer Status Updated Successfully"
        }
        res.status(202).json({responseCode: 202, message: message, success: success})
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}
