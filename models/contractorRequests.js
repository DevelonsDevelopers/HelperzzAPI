const database = require('../util/database')

module.exports = class contractorRequests {

    static create (params) {
        return database.query("INSERT INTO contractor_requests (contractor, user, postal_code, message) VALUES (?, ?, ?, ?)", [params.contractor, params.user, params.postal_code, params.message])
    }

    static fetch(id) {
        return database.query('SELECT contractor_requests.*, customers.name, customers.email, customers.phone, customers.address FROM contractor_requests INNER JOIN customers ON customers.id = contractor_requests.user WHERE contractor_requests.id = ?', [id])
    }

    static fetchAll() {
        return database.query('SELECT contractor_requests.*, customers.name as customer_name FROM contractor_requests INNER JOIN customers ON customers.id = contractor_requests.user')
    }

    static delete(id) {
        return database.query('DELETE FROM contractor_requests WHERE id = ?', [id])
    }

    static accept (id) {
        return database.query('UPDATE contractor_requests SET status = 1 WHERE (id = ?)', [id])
    }

    static reject (id) {
        return database.query('UPDATE contractor_requests SET status = 2 WHERE (id = ?)', [id])
    }

    static changeStatus(params) {
        return database.query('UPDATE contractor_requests SET status = ? WHERE (id = ?)', [params.status, params.id])
    }
}
