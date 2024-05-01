const database = require('../util/database')

module.exports = class contractorRequests {

    static create (params) {
        return database.query("INSERT INTO contractor_requests (contractor, user, postal_code, message) VALUES (?, ?, ?, ?)", [params.contractor, params.user, params.postal_code, params.message])
    }

    static fetch(id) {
        return database.query('SELECT * FROM contractor_requests WHERE id = ?', [id])
    }

    static fetchAll() {
        return database.query('SELECT * FROM contractor_requests')
    }

    static delete(id) {
        return database.query('DELETE FROM contractor_requests WHERE id = ?', [id])
    }

    static changeStatus(params) {
        return database.query('UPDATE contractor_requests SET status = ? WHERE (id = ?)', [params.status, params.id])
    }
}
