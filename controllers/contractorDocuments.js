const ContractorDocuments = require("../models/contractorDocuments");

exports.createContractorDocument = async (req, res, next) => {
    try {
        const [result] = await ContractorDocuments.create(req.body)
        const [[contractorDocument]] = await ContractorDocuments.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Document Added Successfully", document: contractorDocument })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getDocument = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[contractorDocument]] = await ContractorDocuments.fetch(id)
        res.status(201).json({ responseCode: 201, message: "Document Fetched Successfully", contractorDocument: contractorDocument })
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
        const [contractorDocuments] = await ContractorDocuments.fetchByContractor(contractor)
        res.status(201).json({ responseCode: 201, message: "Documents Fetched Successfully", contractorDocuments: contractorDocuments })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteDocument = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await ContractorDocuments.delete(id)
        let success = false
        let message = "No Document Found"
        if (result.affectedRows === 1){
            success = true
            message = "Document Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
