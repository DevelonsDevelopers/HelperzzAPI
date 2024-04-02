const database = require('../util/database')

module.exports = class contractorReviews {

    static create(params) {
        return database.query('INSERT INTO contractors_reviews (user, contractor, review, rating) VALUES (?, ?, ?, ?);', [params.user, params.contractor, params.review, params.rating])
    }

    static update(params) {
        return database.query('')
    }

    static fetch(id) {
        return database.query('SELECT * FROM contractors_reviews WHERE id = ?', [id])
    }

    static fetchByContractor(contractor) {
        return database.query('SELECT * FROM contractors_reviews WHERE contractor = ?', [contractor])
    }

    static delete(id) {
        return database.query('DELETE FROM contractors_reviews WHERE id = ?', [id])
    }
}
