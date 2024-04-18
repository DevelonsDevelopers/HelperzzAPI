const ContractorDetails = require('../models/contractorDetails')

exports.createContractorDetails = async (req, res, next) => {
    try {
        const [result] = await ContractorDetails.create(req.body)
        const [[details]] = await ContractorDetails.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Contractor Details Added Successfully", contractorDetails: details })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateContractorDetails = async (req, res, next) => {
    try {
        const [result] = await ContractorDetails.update(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.affectedRows === 1){
            success = true
            message = "Contractor Details Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getPopularContractors = async (req, res, next) => {
    try {
        const [contractors] = await ContractorDetails.popularContractors()
        res.status(200).json({responseCode: 200, message: "Contractors fetched successfully", contractors: contractors})
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getRecentContractors = async (req, res, next) => {
    try {
        const [contractors] = await ContractorDetails.recentContractors()
        res.status(200).json({responseCode: 200, message: "Contractors fetched successfully", contractors: contractors})
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}
