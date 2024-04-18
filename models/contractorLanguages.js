const database = require('../util/database')

module.exports = class contractorLanguages {

    static create(params) {
        return database.query('INSERT INTO contractor_languages (contractor, language) VALUES (?, ?)', [params.contractor, params.language])
    }

    static fetch(id) {
        return database.query('SELECT * FROM contractor_languages WHERE id = ?', [id])
    }

    static fetchByContractor(contractor) {
        return database.query('SELECT languages.*, IFNULL(contractor_languages.id, 0) as assigned FROM languages LEFT JOIN contractor_languages ON contractor_languages.language = languages.id AND contractor_languages.contractor = ?', [contractor])
    }

    static delete(id) {
        return database.query('DELETE FROM contractor_languages WHERE id = ?', [id])
    }
}
