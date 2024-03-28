const ServiceRequest = require('../models/serviceRequest')

exports.createServiceRequest = async (req, res, next) => {
    try {
        const [result] = await ServiceRequest.create(req.body)
        const [[serviceRequest]] = await ServiceRequest.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Service Request Created Successfully", serviceRequest: serviceRequest })
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
