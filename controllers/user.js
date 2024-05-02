const User = require("../models/user");

exports.createUser = async (req, res, next) => {
    try {
        const [result] = await User.create(req.body)
        const [[user]] = await User.fetch(result.insertId)
        res.status(201).json({ responseCode: 201, message: "User Added Successfully", user: user })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const [[user]] = await User.fetch(id)
        res.status(200).json({ responseCode: 200, message: "User Fetched Successfully", user: user })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getAllUsers = async (req, res, next) => {
    try {
        const [users] = await User.fetchAll()
        res.status(200).json({ responseCode: 200, message: "Users fetched successfully", users: users })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateUser = async (req, res, next) => {
    try {
        const [result] = await User.update(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "User Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updatePassword = async (req, res, next) => {
    try {
        const [result] = await User.updateByToken(req.body)
        let success = false
        let message = "Failed to Update Password"
        if (result.changedRows === 1){
            success = true
            message = "Password Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await User.delete(id)
        let success = false
        let message = "No User Found"
        if (result.affectedRows === 1){
            success = true
            message = "User Deleted Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateUserStatus = async (req, res, next) => {
    try {
        const [result] = await User.changeStatus(req.body)
        let success = false
        let message = "Failed to Update"
        if (result.changedRows === 1){
            success = true
            message = "User Status Updated Successfully"
        }
        res.status(202).json({ responseCode: 202, message: message, success: success })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
