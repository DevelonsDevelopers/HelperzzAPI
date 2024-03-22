const User = require("../models/user");

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
