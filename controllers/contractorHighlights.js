const ContractorHighlights = require("../models/contractorHighlights");

exports.createContractorHighlight = async (req, res, next) => {
    try {
        const [result] = await ContractorHighlights.create(req.body)
        const [[contractorHighlight]] = await ContractorHighlights.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Highlights Added Successfully", highlight: contractorHighlight })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getHighlight = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[contractorHighlight]] = await ContractorHighlights.fetch(id)
        res.status(201).json({ responseCode: 201, message: "Highlight Fetched Successfully", contractorHighlight: contractorHighlight })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getByHighlights = async (req, res, next) => {
    try {
        const { contractor } = req.params
        const [contractorHighlights] = await ContractorHighlights.fetchByContractor(contractor)
        res.status(201).json({ responseCode: 201, message: "Highlights Fetched Successfully", contractorHighlights: contractorHighlights })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteHighlight = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await ContractorHighlights.delete(id)
        let success = false
        let message = "No Highlight Found"
        if (result.affectedRows === 1){
            success = true
            message = "Highlight Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
