const ContractorRequest = require('../models/contractorRequests')

exports.createContractorRequest = async (req, res, next) => {
    try {
        const [result] = await ContractorRequest.create(req.body)
        const [[contractorRequest]] = await ContractorRequest.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Contractor Request Added Successfully", contractorRequest: contractorRequest })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getContractorRequest = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[contractorRequest]] = await ContractorRequest.fetch(id)
        res.status(201).json({ responseCode: 201, message: "Contractor Request fetched Successfully", contractorRequest: contractorRequest })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllContractorRequests = async (req, res, next) => {
    try {
        const [contractorRequests] = await ContractorRequest.fetchAll()
        res.status(200).json({ responseCode: 200, message: "Contractor Requests fetched successfully", contractorRequests: contractorRequests })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteContractorRequest = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await ContractorRequest.delete(id)
        let success = false
        let message = "No Contractor Request Found"
        if (result.affectedRows === 1){
            success = true
            message = "Contractor Request Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateContractorRequestStatus = async (req, res, next) => {
    try {
        const [result] = await ContractorRequest.changeStatus(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Contractor Request Status Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
