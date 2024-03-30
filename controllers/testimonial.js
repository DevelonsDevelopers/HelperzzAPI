const Testimonial = require('../models/testimonial')

exports.createTestimonial = async (req, res, next) => {
    try {
        const [result] = await Testimonial.create(req.body)
        const [[testimonial]] = await Testimonial.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Testimonial Added Successfully", testimonial: testimonial })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getTestimonial = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[testimonial]] = await Testimonial.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Testimonial Added Successfully", testimonial: testimonial })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllTestimonials = async (req, res, next) => {
    try {
        const [testimonials] = await Testimonial.fetchAll()
        res.status(200).json({ responseCode: 200, message: "Testimonials fetched successfully", testimonials: testimonials })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllActiveTestimonials = async (req, res, next) => {
    try {
        const [testimonials] = await Testimonial.fetchAllActive()
        res.status(200).json({ responseCode: 200, message: "Testimonials fetched successfully", testimonials: testimonials })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getFeaturedTestimonials = async (req, res, next) => {
    try {
        const [testimonials] = await Testimonial.featured()
        res.status(200).json({ responseCode: 200, message: "Testimonials fetched successfully", testimonials: testimonials })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteTestimonial = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await Testimonial.delete(id)
        let success = false
        let message = "No Testimonial Found"
        if (result.affectedRows === 1){
            success = true
            message = "Testimonial Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateTestimonial = async (req, res, next) => {
    try {
        const [result] = await Testimonial.update(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Testimonial Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateTestimonialStatus = async (req, res, next) => {
    try {
        const [result] = await Testimonial.changeStatus(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Testimonial Status Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateTestimonialFeatured = async (req, res, next) => {
    try {
        const [result] = await Testimonial.changeFeatured(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "Testimonial Featured Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
