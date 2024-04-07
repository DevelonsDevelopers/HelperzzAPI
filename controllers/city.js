const City = require('../models/city')

exports.getCity = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[city]] = await City.fetch(id)
        res.status(201).json({ responseCode: 201, message: "City Fetched Successfully", city: city })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getCityByTag = async (req, res, next) => {
    try {
        const { tag } = req.params
        const [[city]] = await City.fetchByTag(tag)
        res.status(201).json({ responseCode: 201, message: "City Fetched Successfully", city: city })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllCities = async (req, res, next) => {
    try {
        const [cities] = await City.fetchAll()
        res.status(200).json({ responseCode: 200, message: "Cities fetched successfully", cities: cities })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllActiveCities = async (req, res, next) => {
    try {
        const [cities] = await City.fetchAllActive()
        res.status(200).json({ responseCode: 200, message: "Cities fetched successfully", cities: cities })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
