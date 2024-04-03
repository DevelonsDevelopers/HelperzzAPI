const ContractorReviews = require("../models/contractorReviews");

exports.createContractorReview = async (req, res, next) => {
    try {
        const [result] = await ContractorReviews.create(req.body)
        const [[contractorReview]] = await ContractorReviews.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Review Added Successfully", review: contractorReview })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getReview = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[contractorReview]] = await ContractorReviews.fetch(id)
        res.status(201).json({ responseCode: 201, message: "Review Fetched Successfully", contractorReview: contractorReview })
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
        const [contractorReviews] = await ContractorReviews.fetchByContractor(contractor)
        res.status(201).json({ responseCode: 201, message: "Reviews Fetched Successfully", contractorReviews: contractorReviews })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteReview = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await ContractorReviews.delete(id)
        let success = false
        let message = "No Review Found"
        if (result.affectedRows === 1){
            success = true
            message = "Review Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}