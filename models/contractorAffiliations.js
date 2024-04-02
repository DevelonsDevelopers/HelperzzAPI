const database = require('../util/database')

module.exports = class contractorAffiliations {

    static create(params) {
        return database.query('INSERT INTO contractors_affiliations (contractor, title, date) VALUES (?, ?, ?)', [params.contractor, params.title, params.date])
    }

    static update(params) {
        return database.query('')
    }

    static fetch(id) {
        return database.query('SELECT * FROM contractors_affiliations WHERE id = ?', [id])
    }

    static fetchByContractor(contractor) {
        return database.query('SELECT * FROM contractors_affiliations WHERE contractor = ?', [contractor])
    }

    static delete(id) {
        return database.query('DELETE FROM contractors_affiliations WHERE id = ?', [id])
    }
}
