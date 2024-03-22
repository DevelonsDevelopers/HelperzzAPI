const User = require('../models/user')
const Auth = require('../middleware/authMiddleware')

exports.Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password){
            return res.status(400).json({ responseCode: 400, message: "Invalid Data" })
        }
        const [[user]] = await User.fetchByEmail(email)
        if (user) {
            let authenticate = await Auth.comparePassword(user.password, password)
            if (authenticate) {
                let payload = {
                    id: user.id
                };
                let token = Auth.createToken(payload)
                return res.status(200).json({ responseCode: 200, message: "Login Success", token: token, user: user })
            }
        }
        return res.status(401).json({ responseCode: 401, message: "Invalid Credentials! Failed to Authenticate" })
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}
