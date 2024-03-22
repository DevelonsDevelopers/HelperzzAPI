const database = require('../util/database')

module.exports = class User {

    static fetchByEmail (email) {
        return database.query('SELECT * FROM users WHERE email = ?', [email])
    }

    static fetchAll () {
        return database.query('SELECT * FROM users')
    }

}
