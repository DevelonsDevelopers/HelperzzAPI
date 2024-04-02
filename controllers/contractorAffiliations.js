const ContractorAffiliations = require("../models/contractorAffiliations");

exports.createContractorAffiliation = async (req, res, next) => {
    try {
        const [result] = await ContractorAffiliations.create(req.body)
        const [[contractorAffiliation]] = await ContractorAffiliations.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Affiliations Added Successfully", affiliation: contractorAffiliation })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAffiliation = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[contractorAffiliation]] = await ContractorAffiliations.fetch(id)
        res.status(201).json({ responseCode: 201, message: "Affiliation Fetched Successfully", contractorAffiliation: contractorAffiliation })
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
        const [contractorAffiliations] = await ContractorAffiliations.fetchByContractor(contractor)
        res.status(201).json({ responseCode: 201, message: "Affiliations Fetched Successfully", contractorAffiliations: contractorAffiliations })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteAffiliation = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await ContractorAffiliations.delete(id)
        let success = false
        let message = "No Affiliation Found"
        if (result.affectedRows === 1){
            success = true
            message = "Affiliation Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
