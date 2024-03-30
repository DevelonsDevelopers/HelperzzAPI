const database = require('../util/database')

module.exports = class Customer {

    static passwordLessCreate (params){
        return database.query('INSERT INTO customers (name, email, phone, address) VALUES (?, ?, ?, ?)', [params.name, params.email, params.phone, params.street])
    }

    static fetch(id) {
        return database.query('SELECT * FROM customers WHERE id = ?', [id])
    }

    static fetchAll() {
        return database.query('SELECT * FROM customers')
    }
}
