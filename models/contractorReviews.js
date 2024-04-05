const database = require('../util/database')

module.exports = class contractorReviews {

    static create(params) {
        return database.query('INSERT INTO contractors_reviews (user, contractor, review, rating, title, price) VALUES (?, ?, ?, ?, ?, ?);', [params.user, params.contractor, params.review, params.rating, params.title, params.price])
    }

    static addImage(params) {
        return database.query('INSERT INTO review_images (review, image) VALUES (?, ?)', [params.review, params.image])
    }

    static update(params) {
        return database.query('')
    }

    static fetch(id) {
        return database.query('SELECT * FROM contractors_reviews WHERE id = ?', [id])
    }

    static fetchByContractor(contractor) {
        return database.query('SELECT contractors_reviews.*, customers.name FROM contractors_reviews INNER JOIN customers ON customers.id = contractors_reviews.user WHERE contractor = ?', [contractor])
    }

    static fetchImagesByReview (id) {
        return database.query('SELECT * FROM review_images WHERE review = ?', [id])
    }

    static delete(id) {
        return database.query('DELETE FROM contractors_reviews WHERE id = ?', [id])
    }
}
