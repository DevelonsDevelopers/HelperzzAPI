const Contractor = require('../models/contractor')
const ContractorDetails = require('../models/contractorDetails')

exports.createContractor = async (req, res, next) => {
    try {
        const [result] = await Contractor.create(req.body)
        const [[contractor]] = await Contractor.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Contractor Added Successfully", contractor: contractor })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getContractor = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[contractor]] = await Contractor.fetch(id)
        res.status(201).json({ responseCode: 201, message: "Contractor fetched Successfully", contractor: contractor })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getContractorDetails = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[contractor]] = await Contractor.fetch(id)
        const [[details]] = await ContractorDetails.fetch(id)
        res.status(201).json({ responseCode: 201, message: "Contractor fetched Successfully", data: { contractor: contractor, details: details } })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllContractors = async (req, res, next) => {
    try {
        const [contractors] = await Contractor.fetchAll()
        res.status(200).json({ responseCode: 200, message: "Contractors fetched successfully", contractors: contractors })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllActiveContractors = async (req, res, next) => {
    try {
        const [contractors] = await Contractor.fetchAllActive()
        res.status(200).json({ responseCode: 200, message: "Contractors fetched successfully", contractors: contractors })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllAssignedContractors = async (req, res, next) => {
    try {
        const { request } = req.params
        const [contractors] = await Contractor.fetchAllAssigned(request)
        res.status(200).json({ responseCode: 200, message: "Contractors fetched successfully", contractors: contractors })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getFeaturedContractors = async (req, res, next) => {
    try {
        const [contractors] = await Contractor.featured()
        res.status(200).json({ responseCode: 200, message: "Contractors fetched successfully", contractors: contractors })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteContractor = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await Contractor.delete(id)
        let success = false
        let message = "No Contractor Found"
        if (result.affectedRows === 1){
            success = true
            message = "Contractor Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateContractor = async (req, res, next) => {
    try {
        const [result] = await Contractor.update(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Contractor Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateContractorStatus = async (req, res, next) => {
    try {
        const [result] = await Contractor.changeStatus(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Contractor Status Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateContractorFeatured = async (req, res, next) => {
    try {
        const [result] = await Contractor.changeFeatured(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Contractor Featured Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
