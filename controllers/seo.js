const SEO = require('../models/seo')

exports.createSEO = async (req, res, next) => {
    try {
        const [result] = await SEO.create(req.body)
        const [[seo]] = await SEO.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "SEO Added Successfully", seo: seo })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getSEO = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[seo]] = await SEO.fetch(id)
        res.status(201).json({ responseCode: 201, message: "SEO Fetched Successfully", seo: seo })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getSEObyRoute = async (req, res, next) => {
    try {
        const { route } = req.params
        const [[seo]] = await SEO.fetchByRoute(route)
        res.status(201).json({ responseCode: 201, message: "SEO Fetched Successfully", seo: seo })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllSEO = async (req, res, next) => {
    try {
        const [allSEO] = await SEO.fetchAll()
        res.status(200).json({ responseCode: 200, message: "All SEO's fetched successfully", allSEO: allSEO })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateSEO = async (req, res, next) => {
    try {
        const [result] = await SEO.update(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "SEO Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteSEO = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await SEO.delete(id)
        let success = false
        let message = "No City Found"
        if (result.affectedRows === 1){
            success = true
            message = "SEO Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
