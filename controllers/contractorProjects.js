const ContractorProjects = require("../models/contractorProjects");

exports.createContractorProject = async (req, res, next) => {
    try {
        const [result] = await ContractorProjects.create(req.body)
        const [[contractorProject]] = await ContractorProjects.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Project Added Successfully", project: contractorProject })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.addImage = async (req, res, next) => {
    try {
        const [result] = await ContractorProjects.addImage(req.body)
        res.status(201).json({ responseCode: 201, message: "Project Image Added Successfully" })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getProject = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[contractorProject]] = await ContractorProjects.fetch(id)
        res.status(201).json({ responseCode: 201, message: "Project Fetched Successfully", contractorProject: contractorProject })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getByContractors = async (req, res, next) => {
    try {
        const { contractor } = req.params
        const [contractorProjects] = await ContractorProjects.fetchByContractor(contractor)
        res.status(201).json({ responseCode: 201, message: "Projects Fetched Successfully", contractorProjects: contractorProjects })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteProject = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await ContractorProjects.delete(id)
        let success = false
        let message = "No Project Found"
        if (result.affectedRows === 1){
            success = true
            message = "Project Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
