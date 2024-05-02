const database = require('../util/database')
const Auth = require("../middleware/authMiddleware");

module.exports = class Customer {

    static async create (params){
        const hash = await Auth.hashPassword(params.password)
        return database.query('INSERT INTO customers (name, email, phone, address, password) VALUES (?, ?, ?, ?, ?)', [params.name, params.email, params.phone, params.address, hash])
    }

    static passwordLessCreate (params){
        return database.query('INSERT INTO customers (name, email, phone, address) VALUES (?, ?, ?, ?)', [params.name, params.email, params.phone, params.street])
    }

    static setPassword (params){
        return database.query('')
    }

    static fetch(id) {
        return database.query('SELECT * FROM customers WHERE id = ?', [id])
    }

    static fetchByEmail(email) {
        return database.query('SELECT * FROM customers WHERE email = ?', [email])
    }

    static fetchAll() {
        return database.query('SELECT * FROM customers')
    }

    static updateByToken (params) {
        return database.query('UPDATE customers SET password = ? WHERE (reset_token = ?)', [params.password, params.token])
    }

    static setToken(params){
        return database.query('UPDATE customers SET reset_token = ? WHERE (email = ?)', [params.reset_token, params.email])
    }
}
