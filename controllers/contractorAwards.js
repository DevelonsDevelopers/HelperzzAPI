const ContractorAwards = require("../models/contractorAwards");

exports.createContractorAward = async (req, res, next) => {
    try {
        const [result] = await ContractorAwards.create(req.body)
        const [[contractorAwards]] = await ContractorAwards.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Award Added Successfully", award: contractorAwards })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAward = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[contractorAward]] = await ContractorAwards.fetch(id)
        res.status(201).json({ responseCode: 201, message: "Award Fetched Successfully", contractorAward: contractorAward })
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
        const [contractorAwards] = await ContractorAwards.fetchByContractor(contractor)
        res.status(201).json({ responseCode: 201, message: "Awards Fetched Successfully", contractorAwards: contractorAwards })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteAward = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await ContractorAwards.delete(id)
        let success = false
        let message = "No Award Found"
        if (result.affectedRows === 1){
            success = true
            message = "Award Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
