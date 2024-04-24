const Contractor = require('../models/contractor')
const ContractorDetails = require('../models/contractorDetails')
const ContractorAwards = require('../models/contractorAwards')
const ContractorAffiliations = require('../models/contractorAffiliations')
const ContractorBadges = require('../models/contractorBadges')
const ContractorReviews = require('../models/contractorReviews')
const ContractorProjects = require('../models/contractorProjects')
const ContractorAreas = require('../models/contractorAreas')
const ContractorHighlights = require('../models/contractorHighlights')
const ContractorLanguages = require('../models/contractorLanguages')
const ContractorRequests = require('../models/requestContractor')

exports.createContractor = async (req, res, next) => {
    try {
        const [result] = await Contractor.create(req.body)
        const [[contractor]] = await Contractor.fetch(result.insertId)
        res.status(201).json({responseCode: 201, message: "Contractor Added Successfully", contractor: contractor})
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getContractor = async (req, res, next) => {
    try {
        const {id} = req.params
        const [[contractor]] = await Contractor.fetch(id)
        res.status(200).json({responseCode: 200, message: "Contractor fetched Successfully", contractor: contractor})
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getContractorDetails = async (req, res, next) => {
    try {
        const {id} = req.params
        const [[contractor]] = await Contractor.fetch(id)
        const [[details]] = await ContractorDetails.fetch(id)
        const [awards] = await ContractorAwards.fetchByContractor(id)
        const [affiliations] = await ContractorAffiliations.fetchByContractor(id)
        const [badges] = await ContractorBadges.fetchByContractor(id)
        const [reviews] = await ContractorReviews.fetchByContractor(id)
        for (const value of reviews) {
            const [images] = await ContractorReviews.fetchImagesByReview(value.id)
            value.images = images;
        }
        const [projects] = await ContractorProjects.fetchByContractor(id)
        for (const project of projects) {
            const [images] = await ContractorProjects.fetchImagesByProject(project.id)
            project.images = images
        }
        const [areas] = await ContractorAreas.fetchByContractor(id)
        const [highlights] = await ContractorHighlights.fetchByContractor(id)
        const [languages] = await ContractorLanguages.fetchByContractor(id)
        const [leads] = await ContractorRequests.fetchByContractor(id)
        res.status(200).json({
            responseCode: 200,
            message: "Contractor fetched Successfully",
            data: {
                contractor: contractor,
                details: details,
                awards: awards,
                affiliations: affiliations,
                badges: badges,
                reviews: reviews,
                projects: projects,
                areas: areas,
                highlights: highlights,
                languages: languages,
                leads: leads
            }
        })
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getContractorDetailsByTag = async (req, res, next) => {
    try {
        const {tag} = req.params
        const [[contractor]] = await Contractor.fetchByTag(tag)
        const [[details]] = await ContractorDetails.fetch(contractor.id)
        const [awards] = await ContractorAwards.fetchByContractor(contractor.id)
        const [affiliations] = await ContractorAffiliations.fetchByContractor(contractor.id)
        const [badges] = await ContractorBadges.fetchByContractor(contractor.id)
        const [reviews] = await ContractorReviews.fetchByContractor(contractor.id)
        const [ratings] = await ContractorReviews.fetchRatings(contractor.id)
        for (const value of reviews) {
            const [images] = await ContractorReviews.fetchImagesByReview(value.id)
            value.images = images;
        }
        const [projects] = await ContractorProjects.fetchByContractor(contractor.id)
        for (const project of projects) {
            const [images] = await ContractorProjects.fetchImagesByProject(project.id)
            project.images = images
        }
        res.status(200).json({
            responseCode: 200,
            message: "Contractor fetched Successfully",
            data: {
                contractor: contractor,
                details: details,
                awards: awards,
                affiliations: affiliations,
                badges: badges,
                reviews: reviews,
                ratings: ratings,
                projects: projects
            }
        })
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllContractors = async (req, res, next) => {
    try {
        const [contractors] = await Contractor.fetchAll()
        res.status(200).json({responseCode: 200, message: "Contractors fetched successfully", contractors: contractors})
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllActiveContractors = async (req, res, next) => {
    try {
        const [contractors] = await Contractor.fetchAllActive()
        res.status(200).json({responseCode: 200, message: "Contractors fetched successfully", contractors: contractors})
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllAssignedContractors = async (req, res, next) => {
    try {
        const {request} = req.params
        const [contractors] = await Contractor.fetchAllAssigned(request)
        res.status(200).json({responseCode: 200, message: "Contractors fetched successfully", contractors: contractors})
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getContractorsByCategory = async (req, res, next) => {
    try {
        const {category} = req.params
        const [contractors] = await Contractor.fetchByCategory(category)
        res.status(200).json({responseCode: 200, message: "Contractors fetched successfully", contractors: contractors})
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getFeaturedContractors = async (req, res, next) => {
    try {
        const [contractors] = await Contractor.featured()
        res.status(200).json({responseCode: 200, message: "Contractors fetched successfully", contractors: contractors})
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteContractor = async (req, res, next) => {
    try {
        const {id} = req.params
        const [result] = await Contractor.delete(id)
        let success = false
        let message = "No Contractor Found"
        if (result.affectedRows === 1) {
            success = true
            message = "Contractor Deleted Successfully"
        }
        res.status(202).json({responseCode: 202, message: message, success: success})
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateContractor = async (req, res, next) => {
    try {
        const [result] = await Contractor.update(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1) {
            success = true
            message = "Contractor Updated Successfully"
        }
        res.status(202).json({responseCode: 202, message: message, success: success})
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateContractorStatus = async (req, res, next) => {
    try {
        const [result] = await Contractor.changeStatus(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1) {
            success = true
            message = "Contractor Status Updated Successfully"
        }
        res.status(202).json({responseCode: 202, message: message, success: success})
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateContractorFeatured = async (req, res, next) => {
    try {
        const [result] = await Contractor.changeFeatured(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1) {
            success = true
            message = "Contractor Featured Updated Successfully"
        }
        res.status(202).json({responseCode: 202, message: message, success: success})
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}
