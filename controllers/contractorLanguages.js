const ContractorLanguages = require("../models/contractorLanguages");

exports.createContractorLanguage = async (req, res, next) => {
    try {
        const [result] = await ContractorLanguages.create(req.body)
        const [[contractorLanguage]] = await ContractorLanguages.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Language Added Successfully", language: contractorLanguage })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getLanguage = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[contractorLanguage]] = await ContractorLanguages.fetch(id)
        res.status(201).json({ responseCode: 201, message: "Language Fetched Successfully", contractorLanguage: contractorLanguage })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getByLanguages = async (req, res, next) => {
    try {
        const { contractor } = req.params
        const [contractorLanguages] = await ContractorLanguages.fetchByContractor(contractor)
        res.status(201).json({ responseCode: 201, message: "Languages Fetched Successfully", contractorLanguages: contractorLanguages })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteLanguage = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await ContractorLanguages.delete(id)
        let success = false
        let message = "No Language Found"
        if (result.affectedRows === 1){
            success = true
            message = "Language Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
