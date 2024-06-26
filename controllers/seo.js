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

exports.createCityCategorySEO = async (req, res, next) => {
    try {
        const [result] = await SEO.createCityCategory(req.body)
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

exports.getCityCategorySEO = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[seo]] = await SEO.fetchCityCategorySEO(id)
        res.status(201).json({ responseCode: 201, message: "SEO Fetched Successfully", seo: seo })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getCityCategorySEOByTag = async (req, res, next) => {
    try {
        const city = req.body.city;
        const category = req.body.category
        console.log(req.body)
        const [[seo]] = await SEO.fetchCityCategorySEOByTag(city, category)
        res.status(200).json({ responseCode: 200, message: "SEO Fetched Successfully", seo: seo })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getContractorPageSEO = async (req, res, next) => {
    try {
        const { tag } = req.params
        const [[seo]] = await SEO.fetchContractorPage(tag)
        res.status(201).json({ responseCode: 201, message: "SEO Fetched Successfully", seo: seo })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getCategoryPageSEO = async (req, res, next) => {
    try {
        const { tag } = req.params
        const [[seo]] = await SEO.fetchCategoryPage(tag)
        res.status(201).json({ responseCode: 201, message: "SEO Fetched Successfully", seo: seo })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getBlogPageSEO = async (req, res, next) => {
    try {
        const { tag } = req.params
        const [[seo]] = await SEO.fetchBlogPage(tag)
        res.status(201).json({ responseCode: 201, message: "SEO Fetched Successfully", seo: seo })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getSubcategoryPageSEO = async (req, res, next) => {
    try {
        const { tag } = req.params
        const [[seo]] = await SEO.fetchSubcategoryPage(tag)
        res.status(201).json({ responseCode: 201, message: "SEO Fetched Successfully", seo: seo })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getCostGuidePageSEO = async (req, res, next) => {
    try {
        const { tag } = req.params
        const [[seo]] = await SEO.fetchCostGuidePage(tag)
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

exports.getCityCategory = async (req, res, next) => {
    try {
        const [cityCategory] = await SEO.fetchCityCategory()
        res.status(200).json({ responseCode: 200, message: "All Cities and Categories fetched successfully", cityCategory: cityCategory })
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

exports.updateCityCategorySEO = async (req, res, next) => {
    try {
        const [result] = await SEO.updateCityCategory(req.body)
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
