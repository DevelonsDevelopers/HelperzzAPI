const database = require('../util/database')
const Auth = require("../middleware/authMiddleware");

module.exports = class User {

    static async create (params) {
        const hash = await Auth.hashPassword(params.password)
        return database.query("INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)", [params.name, params.username, params.email, hash])
    }

    static fetch (id) {
        return database.query("SELECT * FROM users WHERE id = ?", [id])
    }

    static fetchByEmail (email) {
        return database.query('SELECT * FROM users WHERE email = ?', [email])
    }

    static fetchAll () {
        return database.query('SELECT * FROM users')
    }

    static update (params) {
        return database.query('UPDATE users SET name = ?, username = ?, email = ?, password = ? WHERE (id = ?)', [params.name, params.username, params.email, params.password, params.id])
    }

    static updateByToken (params) {
        return database.query('UPDATE users SET password = ? WHERE (reset_token = ?)', [params.password, params.token])
    }

    static delete (id) {
        return database.query('DELETE FROM users WHERE id = ?', [id])
    }

    static changeStatus(params){
        return database.query('UPDATE users SET status = ? WHERE (id = ?)', [params.status, params.id])
    }

    static setToken(params){
        return database.query('UPDATE users SET reset_token = ? WHERE (email = ?)', [params.reset_token, params.email])
    }
}
