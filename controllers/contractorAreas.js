const ContractorAreas = require("../models/contractorAreas");

exports.createContractorArea = async (req, res, next) => {
    try {
        const [result] = await ContractorAreas.create(req.body)
        const [[contractorArea]] = await ContractorAreas.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Area Added Successfully", area: contractorArea })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getArea = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[contractorArea]] = await ContractorAreas.fetch(id)
        res.status(201).json({ responseCode: 201, message: "Area Fetched Successfully", contractorArea: contractorArea })
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
        const [contractorAreas] = await ContractorAreas.fetchByContractor(contractor)
        res.status(201).json({ responseCode: 201, message: "Areas Fetched Successfully", contractorAreas: contractorAreas })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteArea = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await ContractorAreas.delete(id)
        let success = false
        let message = "No Area Found"
        if (result.affectedRows === 1){
            success = true
            message = "Area Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
