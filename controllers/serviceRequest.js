const ServiceRequest = require('../models/serviceRequest')
const ContractorReviews = require("../models/contractorReviews");
const Email = require("./emailService");

exports.createServiceRequest = async (req, res, next) => {
    try {
        const [result] = await ServiceRequest.create(req.body)
        const [[serviceRequest]] = await ServiceRequest.fetch(result.insertId)
        const [[customer]] = await ServiceRequest.fetch(result.insertId)
        await Email.leadSubmit(customer.email, customer.name)
        global.io.emit("newRequest", serviceRequest)
        res.status(201).json({ responseCode: 201, message: "Service Request Created Successfully", serviceRequest: serviceRequest })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getServiceRequest = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[serviceRequest]] = await ServiceRequest.fetch(id)
        res.status(201).json({ responseCode: 201, message: "Service Request Fetched Successfully", serviceRequest: serviceRequest })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllServiceRequests = async (req, res, next) => {
    try {
        const [serviceRequests] = await ServiceRequest.fetchAll()
        res.status(200).json({ responseCode: 200, message: "Service Requests fetched successfully", requests: serviceRequests })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getRecentServiceRequests = async (req, res, next) => {
    try {
        const [serviceRequests] = await ServiceRequest.fetchRecent()
        res.status(200).json({ responseCode: 200, message: "Service Requests fetched successfully", requests: serviceRequests })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.acceptRequest = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await ServiceRequest.accept(id)
        const [[customer]] = await ServiceRequest.fetch(id)
        await Email.approveLead(customer.email)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Request Accepted"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.rejectRequest = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await ServiceRequest.reject(id)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Request Rejected"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteRequest = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await ServiceRequest.delete(id)
        let success = false
        let message = "No Request Found"
        if (result.affectedRows === 1){
            success = true
            message = "Request Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
