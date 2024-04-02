const database = require('../util/database')

module.exports = class contractorBadges {

    static create(params) {
        return database.query('INSERT INTO contractors_badges (contractor, title, date) VALUES (?, ?, ?)', [params.contractor, params.title, params.date])
    }

    static update(params) {
        return database.query('')
    }

    static fetch(id) {
        return database.query('SELECT * FROM contractors_badges WHERE id = ?', [id])
    }

    static fetchByContractor(contractor) {
        return database.query('SELECT * FROM contractors_badges WHERE contractor = ?', [contractor])
    }

    static delete(id) {
        return database.query('DELETE FROM contractors_badges WHERE id = ?', [id])
    }
}
