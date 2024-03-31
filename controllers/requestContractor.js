const RequestContractor = require("../models/requestContractor");

exports.createRequestContractor = async (req, res, next) => {
    try {
        const [result] = await RequestContractor.create(req.body)
        const [[requestContractor]] = await RequestContractor.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Request Contractor Added Successfully", requestContractor: requestContractor })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteRequestContractor = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await RequestContractor.delete(id)
        let success = false
        let message = "No Request Contractor Found"
        if (result.affectedRows === 1){
            success = true
            message = "Request Contractor Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
