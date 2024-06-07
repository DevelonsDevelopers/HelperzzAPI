const database = require('../util/database')

module.exports = class contractorHighlights {

    static create(params) {
        return database.query('INSERT INTO contractor_highlights (contractor, highlight) VALUES (?, ?)', [params.contractor, params.highlight])
    }

    static fetch(id) {
        return database.query('SELECT * FROM contractor_highlights WHERE id = ?', [id])
    }

    static fetchByContractor(contractor) {
        return database.query('SELECT highlights.*, IFNULL(contractor_highlights.id, 0) as assigned FROM highlights LEFT JOIN contractor_highlights ON contractor_highlights.highlight = highlights.id AND contractor_highlights.contractor = ?', [contractor])
    }

    static fetchAssigned(contractor) {
        return database.query('SELECT * FROM (SELECT highlights.*, IFNULL(contractor_highlights.id, 0) as assigned FROM highlights LEFT JOIN contractor_highlights ON contractor_highlights.highlight = highlights.id AND contractor_highlights.contractor = ?) t WHERE assigned != 0', [contractor])
    }

    static delete(id) {
        return database.query('DELETE FROM contractor_highlights WHERE id = ?', [id])
    }
}
