const SuccessStories = require('../models/successStories')

exports.createSuccessStories = async (req, res, next) => {
    try {
        const [result] = await SuccessStories.create(req.body)
        const [[successStory]] = await SuccessStories.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Success Story Added Successfully", successStory: successStory })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getSuccessStory = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[successStory]] = await SuccessStories.fetch(id)
        res.status(201).json({ responseCode: 201, message: "Success Story Fetched Successfully", successStory: successStory })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllSuccessStories = async (req, res, next) => {
    try {
        const [successStories] = await SuccessStories.fetchAll()
        res.status(200).json({ responseCode: 200, message: "Success Stories fetched successfully", successStories: successStories })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllActiveSuccessStories = async (req, res, next) => {
    try {
        const [successStories] = await SuccessStories.fetchAllActive()
        res.status(200).json({ responseCode: 200, message: "Success Stories fetched successfully", successStories: successStories })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getPopularSuccessStory = async (req, res, next) => {
    try {
        const [successStory] = await SuccessStories.popular()
        res.status(200).json({ responseCode: 200, message: "Popular Success Story fetched successfully", successStory: successStory })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateSuccessStory = async (req, res, next) => {
    try {
        const [result] = await SuccessStories.update(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Success Story Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteSuccessStory = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await SuccessStories.delete(id)
        let success = false
        let message = "No Success Story Found"
        if (result.affectedRows === 1){
            success = true
            message = "Success Story Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateSuccessStoryStatus = async (req, res, next) => {
    try {
        const [result] = await SuccessStories.changeStatus(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Success Story Status Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateSuccessStoryPopular = async (req, res, next) => {
    try {
        const [result] = await SuccessStories.changePopular(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Success Story Popular Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
