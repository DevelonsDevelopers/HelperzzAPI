const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {response} = require("express");

const SALT_ROUNDS = 10
const APP_SECRET = process.env.APP_SECRET

const hashPassword = async (password) => {
    let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
    return hashedPassword
}

const comparePassword = async (compare, password) => {
    const matched = await bcrypt.compare(password, compare)
    return matched
}

const createToken = (payload) => {
    let token = jwt.sign(payload, APP_SECRET, {
        expiresIn: "1d"
    })
    return token;
}

const verifyToken = (req, res, next) => {
    const { token } = res.locals
    try {
        let payload = jwt.verify(token, APP_SECRET)
        if (payload) {
            res.locals.payload = payload;
            return next()
        }
        res.status(401).json({ status: 401, message: "Unauthorized" })
    } catch (error) {
        res.status(401).json({ status: 401, message: "Verify Token Exception: " + error.message })
    }
}

const stripToken = (req, res, next) => {
    try {
        const token = req.headers["authorization"].split(" ")[1]
        if (token) {
            res.locals.token = token
            return next()
        }
        res.status(401).json({ status: 401, message: "Unauthorized" })
    } catch (error) {
        res.status(401).json({ status: 401, message: "Strip Token Exception: " + error.message })
    }
}

module.exports = {
    stripToken,
    verifyToken,
    createToken,
    comparePassword,
    hashPassword,
}
