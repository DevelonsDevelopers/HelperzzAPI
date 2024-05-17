const City = require('../models/city')

exports.createCity = async (req, res, next) => {
    try {
        const [result] = await City.create(req.body)
        const [[city]] = await City.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "City Added Successfully", city: city })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

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

exports.updateCity = async (req, res, next) => {
    try {
        const [result] = await City.update(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "City Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteCity = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await City.delete(id)
        let success = false
        let message = "No City Found"
        if (result.affectedRows === 1){
            success = true
            message = "City Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
