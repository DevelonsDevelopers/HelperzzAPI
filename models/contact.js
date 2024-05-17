const database = require("../util/database")

module.exports = class Category {

    static create (params){
        return database.query('INSERT INTO contact_requests (first_name, last_name, company, phone, email, topic, message, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?);', [params.first_name, params.last_name, params.company, params.phone, params.email, params.topic, params.message, params.type])
    }

    static fetch(id) {
        return database.query('SELECT * FROM contact_requests WHERE id = ?', [id])
    }

    static fetchAll() {
        return database.query('SELECT * FROM contact_requests')
    }

    static delete (id){
        return database.query('DELETE FROM contact_requests WHERE id = ?', [id])
    }
}
