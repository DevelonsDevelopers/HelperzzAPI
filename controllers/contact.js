const Contact = require('../models/contact')

exports.createContact = async (req, res, next) => {
    try {
        const [result] = await Contact.create(req.body)
        const [[contact]] = await Contact.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "Contact Us Requested Successfully", contact: contact })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getContact = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[contact]] = await Contact.fetch(id)
        res.status(201).json({ responseCode: 201, message: "Contact Fetched Successfully", contact: contact })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllContacts = async (req, res, next) => {
    try {
        const [contacts] = await Contact.fetchAll()
        res.status(200).json({ responseCode: 200, message: "Contact Us fetched successfully", contacts: contacts })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteContact = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await Contact.delete(id)
        let success = false
        let message = "No Contact Found"
        if (result.affectedRows === 1){
            success = true
            message = "Contact Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
