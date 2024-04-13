const Language = require("../models/language");

exports.createLanguage = async (req, res, next) => {
    try {
        const [result] = await Language.create(req.body)
        const [[language]] = await Language.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Language Added Successfully", highlight: highlight })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getLanguage = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[language]] = await Language.fetch(id)
        res.status(201).json({ responseCode: 201, message: "Language Fetched Successfully", language: language })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllLanguages = async (req, res, next) => {
    try {
        const [languages] = await Language.fetchAll()
        res.status(200).json({ responseCode: 200, message: "Languages fetched successfully", languages: languages })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateLanguage = async (req, res, next) => {
    try {
        const [result] = await Language.update(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Language Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteLanguage = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await Language.delete(id)
        let success = false
        let message = "No Language Found"
        if (result.affectedRows === 1){
            success = true
            message = "Language Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
