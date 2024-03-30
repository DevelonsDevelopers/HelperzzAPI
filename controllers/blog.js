const Blog = require('../models/blog')

exports.createBlog = async (req, res, next) => {
    try {
        const [result] = await Blog.create(req.body)
        const [[blog]] = await Blog.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Blog Added Successfully", blog: blog })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getBlog = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[blog]] = await Blog.fetch(id)
        res.status(201).json({ responseCode: 201, message: "Blog Fetched Successfully", blog: blog })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllBlogs = async (req, res, next) => {
    try {
        const [blogs] = await Blog.fetchAll()
        res.status(200).json({ responseCode: 200, message: "Blogs fetched successfully", blogs: blogs })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllActiveBlogs = async (req, res, next) => {
    try {
        const [blogs] = await Blog.fetchAllActive()
        res.status(200).json({ responseCode: 200, message: "Blogs fetched successfully", blogs: blogs })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getFeaturedBlogs = async (req, res, next) => {
    try {
        const [blogs] = await Blog.featured()
        res.status(200).json({ responseCode: 200, message: "Categories fetched successfully", blogs: blogs })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateBlog = async (req, res, next) => {
    try {
        const [result] = await Blog.update(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Blog Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteBlog = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await Blog.delete(id)
        let success = false
        let message = "No Blog Found"
        if (result.affectedRows === 1){
            success = true
            message = "Blog Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateBlogStatus = async (req, res, next) => {
    try {
        const [result] = await Blog.changeStatus(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Blog Status Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateBlogFeatured = async (req, res, next) => {
    try {
        const [result] = await Blog.changeFeatured(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Blog Featured Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
