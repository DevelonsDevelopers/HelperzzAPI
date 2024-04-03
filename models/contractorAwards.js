const database = require('../util/database')

module.exports = class contractorAwards {

    static create(params) {
        return database.query('INSERT INTO contractors_awards (contractor, title, subtitle, date, image) VALUES (?, ?, ?, ?, ?)', [params.contractor, params.title, params.subtitle, params.date, params.image])
    }

    static update(params) {
        return database.query('')
    }

    static fetch(id) {
        return database.query('SELECT * FROM contractors_awards WHERE id = ?', [id])
    }

    static fetchByContractor(contractor) {
        return database.query('SELECT * FROM contractors_awards WHERE contractor = ?', [contractor])
    }

    static delete(id) {
        return database.query('DELETE FROM contractors_awards WHERE id = ?', [id])
    }
}
