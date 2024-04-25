const database = require("../util/database");
module.exports = class contractorAffiliations {

    static create(params) {
        return database.query('INSERT INTO contractor_documents (contractor, title, file) VALUES (?, ?, ?)', [params.contractor, params.title, params.file])
    }

    static fetch(id) {
        return database.query('SELECT * FROM contractor_documents WHERE id = ?', [id])
    }

    static fetchByContractor(contractor) {
        return database.query('SELECT * FROM contractor_documents WHERE contractor = ?', [contractor])
    }

    static delete(id) {
        return database.query('DELETE FROM contractor_documents WHERE id = ?', [id])
    }
}
