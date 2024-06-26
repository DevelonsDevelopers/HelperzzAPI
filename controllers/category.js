const Category = require('../models/category')
const Subcategory = require("../models/subcategory");
const Contractor = require("../models/contractor");

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

exports.getCategory = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[category]] = await Category.fetch(id)
        res.status(201).json({ responseCode: 201, message: "Category Fetched Successfully", category: category })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getCategoryByTag = async (req, res, next) => {
    try {
        const { tag } = req.params
        const [[category]] = await Category.fetchByTag(tag)
        res.status(201).json({ responseCode: 201, message: "Category Fetched Successfully", category: category })
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

exports.getCategoryContractors = async (req, res, next) => {
    try {
        const [categories] = await Category.fetchAllActive()
        for (const category of categories) {
            const [contractors] = await Contractor.fetchBySingleCategory(category.id)
            category.contractors = contractors;
        }
        res.status(200).json({ responseCode: 200, message: "Categories fetched successfully", categories: categories })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getCategoriesSubcategories = async (req, res, next) => {
    try {
        const [categories] = await Category.fetchAllActive()
        for (const category of categories) {
            const [subcategories] = await Subcategory.fetchByCategory(category.id)
            category.subcategories = subcategories;
        }
        res.status(200).json({ responseCode: 200, message: "Categories and Subcategories fetched successfully", categories: categories })
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

exports.getPopularCategories = async (req, res, next) => {
    try {
        const [categories] = await Category.popular()
        res.status(200).json({ responseCode: 200, message: "Categories fetched successfully", categories: categories })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getBannerCategories = async (req, res, next) => {
    try {
        const [categories] = await Category.banner()
        res.status(200).json({ responseCode: 200, message: "Categories fetched successfully", categories: categories })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getCategoriesContractors = async (req, res, next) => {
    try {
        const [categoriesContractors] = await Category.categoryContractors()
        res.status(200).json({ responseCode: 200, message: "Categories and Contractors fetched successfully", categoriesContractors: categoriesContractors })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateCategory = async (req, res, next) => {
    try {
        const [result] = await Category.update(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Category Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
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

exports.updateCategoryPopular = async (req, res, next) => {
    try {
        const [result] = await Category.changePopular(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Category Popular Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateCategoryBanner = async (req, res, next) => {
    try {
        const [result] = await Category.changeBanner(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Category Popular Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
