const database = require('../util/database')

module.exports = class ServiceRequest {

    static create (params) {
        return database.query('INSERT INTO service_requests (user, subcategory, postal_code, home_type, time, details) VALUES (?, ?, ?, ?, ?, ?)', [params.user, params.subcategory, params.postal_code, params.home_type, params.time, params.details])
    }

    static fetch (id) {
        return database.query('SELECT * FROM service_requests WHERE id = ?')
    }

    static fetchAll () {
        return database.query('SELECT service_requests.*, customers.name, subcategories.name as subcategory_name FROM service_requests INNER JOIN customers ON customers.id = service_requests.user INNER JOIN subcategories ON subcategories.id = service_requests.subcategory')
    }


}