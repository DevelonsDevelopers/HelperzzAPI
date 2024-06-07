const Subcategory = require('../models/subcategory')

exports.createSubcategory = async (req, res, next) => {
    try {
        const [result] = await Subcategory.create(req.body)
        const [[subcategory]] = await Subcategory.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Subcategory Added Successfully", subcategory: subcategory })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getSubcategory = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[subcategory]] = await Subcategory.fetch(id)
        res.status(201).json({ responseCode: 201, message: "Subcategory Fetched Successfully", subcategory: subcategory })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getSubcategoryByTag = async (req, res, next) => {
    try {
        const { tag } = req.params
        const [[subcategory]] = await Subcategory.fetchByTag(tag)
        res.status(201).json({ responseCode: 201, message: "Subcategory Fetched Successfully", subcategory: subcategory })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllSubcategories = async (req, res, next) => {
    try {
        const [subcategories] = await Subcategory.fetchAll()
        res.status(200).json({ responseCode: 200, message: "Subcategories fetched successfully", subcategories: subcategories })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getSubcategoriesByCategory = async (req, res, next) => {
    try {
        const { id } = req.params
        const [subcategories] = await Subcategory.fetchByCategory(id)
        res.status(200).json({ responseCode: 200, message: "Subcategories fetched successfully", subcategories: subcategories })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllActiveSubcategories = async (req, res, next) => {
    try {
        const [subcategories] = await Subcategory.fetchAllActive()
        res.status(200).json({ responseCode: 200, message: "Subcategories fetched successfully", subcategories: subcategories })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateSubcategory = async (req, res, next) => {
    try {
        const [result] = await Subcategory.update(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Subcategory Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteSubcategory = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await Subcategory.delete(id)
        let success = false
        let message = "No Subcategory Found"
        if (result.affectedRows === 1){
            success = true
            message = "Subcategory Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateSubcategoryStatus = async (req, res, next) => {
    try {
        const [result] = await Subcategory.changeStatus(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Subcategory Status Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
