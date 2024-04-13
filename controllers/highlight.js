const Highlight = require("../models/highlight");

exports.createHighlight = async (req, res, next) => {
    try {
        const [result] = await Highlight.create(req.body)
        const [[highlight]] = await Highlight.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Highlight Added Successfully", highlight: highlight })
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
        const [[highlight]] = await Highlight.fetch(id)
        res.status(201).json({ responseCode: 201, message: "Highlight Fetched Successfully", highlight: highlight })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllHighlights = async (req, res, next) => {
    try {
        const [highlights] = await Highlight.fetchAll()
        res.status(200).json({ responseCode: 200, message: "Highlights fetched successfully", highlights: highlights })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateHighlight = async (req, res, next) => {
    try {
        const [result] = await Highlight.update(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Highlight Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
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
        const [result] = await Highlight.delete(id)
        let success = false
        let message = "No Language Found"
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
