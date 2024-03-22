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
