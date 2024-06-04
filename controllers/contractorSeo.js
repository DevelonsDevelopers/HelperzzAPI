const ContractorSeo = require('../models/contractorSeo')

exports.createContractorSeo = async (req, res, next) => {
    try {
        const [result] = await ContractorSeo.create(req.body)
        const [[seo]] = await ContractorSeo.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Contractor SEO Added Successfully", contractorSeo: seo })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateContractorSeo = async (req, res, next) => {
    try {
        const [result] = await ContractorSeo.update(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.affectedRows === 1){
            success = true
            message = "Contractor SEO Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
