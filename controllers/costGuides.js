const CostGuide = require('../models/costGuide')
const Contractor = require("../models/contractor");
const Category = require("../models/category");

exports.createCostGuide = async (req, res, next) => {
    try {
        const [result] = await CostGuide.create(req.body)
        const [[costGuide]] = await CostGuide.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Cost Guide Added Successfully", costGuide: costGuide })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getCostGuide = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[costGuide]] = await CostGuide.fetch(id)
        res.status(201).json({ responseCode: 201, message: "Cost Guide fetched Successfully", costGuide: costGuide })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllCostGuides = async (req, res, next) => {
    try {
        const [costGuides] = await CostGuide.fetchAll()
        res.status(200).json({ responseCode: 200, message: "Cost Guides fetched successfully", costGuides: costGuides })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllActiveCostGuides = async (req, res, next) => {
    try {
        const [costGuides] = await CostGuide.fetchAllActive()
        res.status(200).json({ responseCode: 200, message: "Cost Guides fetched successfully", costGuides: costGuides })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getFeaturedCostGuides = async (req, res, next) => {
    try {
        const [costGuides] = await CostGuide.featured()
        res.status(200).json({ responseCode: 200, message: "Cost Guides fetched successfully", costGuides: costGuides })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteCostGuide = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await CostGuide.delete(id)
        let success = false
        let message = "No Cost Guide Found"
        if (result.affectedRows === 1){
            success = true
            message = "Cost Guide Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateCostGuideStatus = async (req, res, next) => {
    try {
        const [result] = await CostGuide.changeStatus(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Cost Guide Status Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateCostGuideFeatured = async (req, res, next) => {
    try {
        const [result] = await Contractor.changeFeatured(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Cost Guide Featured Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
