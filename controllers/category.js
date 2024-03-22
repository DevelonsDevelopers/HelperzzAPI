const Category = require('../models/category')

exports.createCategory = async (req, res, next) => {
    try {
        const [result] = await Category.create(req.body)
        const [[category]] = await Category.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Category Added Successfully", category: category })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllCategories = async (req, res, next) => {
    try {
        const [categories] = await Category.fetchAll()
        res.status(200).json({ responseCode: 200, message: "Categories fetched successfully", categories: categories })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllActiveCategories = async (req, res, next) => {
    try {
        const [categories] = await Category.fetchAllActive()
        res.status(200).json({ responseCode: 200, message: "Categories fetched successfully", categories: categories })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getFeaturedCategories = async (req, res, next) => {
    try {
        const [categories] = await Category.featured()
        res.status(200).json({ responseCode: 200, message: "Categories fetched successfully", categories: categories })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await Category.delete(id)
        let success = false
        let message = "No Category Found"
        if (result.affectedRows === 1){
            success = true
            message = "Category Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateCategoryStatus = async (req, res, next) => {
    try {
        const [result] = await Category.changeStatus(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Category Status Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateCategoryFeatured = async (req, res, next) => {
    try {
        const [result] = await Category.changeFeatured(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Category Featured Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
