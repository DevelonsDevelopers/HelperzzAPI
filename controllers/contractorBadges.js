const ContractorBadges = require("../models/contractorBadges");

exports.createContractorBadge = async (req, res, next) => {
    try {
        const [result] = await ContractorBadges.create(req.body)
        const [[contractorBadge]] = await ContractorBadges.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Badge Added Successfully", badge: contractorBadge })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getBadge = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[contractorBadge]] = await ContractorBadges.fetch(id)
        res.status(201).json({ responseCode: 201, message: "Badge Fetched Successfully", contractorBadge: contractorBadge })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getByContractors = async (req, res, next) => {
    try {
        const { contractor } = req.params
        const [contractorBadges] = await ContractorBadges.fetchByContractor(contractor)
        res.status(201).json({ responseCode: 201, message: "Badges Fetched Successfully", contractorBadges: contractorBadges })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteBadge = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await ContractorBadges.delete(id)
        let success = false
        let message = "No Badge Found"
        if (result.affectedRows === 1){
            success = true
            message = "Badge Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
