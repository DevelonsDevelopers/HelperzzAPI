const database = require('../util/database')

module.exports = class contractorReviews {

    static create(params) {
        return database.query('INSERT INTO contractors_reviews (user, contractor, category, review, rating, satisfaction, recommendation, paid, postal_code, title, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);', [params.user, params.contractor, params.category, params.review, params.rating, params.satisfaction, params.recommendation, params.paid, params.postal_code, params.title, params.price])
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

    static fetchAll() {
        return database.query('SELECT * FROM contractors_reviews ORDER BY id DESC')
    }

    static fetchByContractor(contractor) {
        return database.query('SELECT contractors_reviews.*, customers.name FROM contractors_reviews INNER JOIN customers ON customers.id = contractors_reviews.user WHERE contractor = ?', [contractor])
    }

    static fetchRatings(contractor) {
        return database.query('SELECT \n' +
            '((SELECT SUM(rating) FROM contractors_reviews WHERE contractor = ?)/(SELECT COUNT(*) FROM contractors_reviews WHERE contractor = ?)) as avg,\n' +
            '(SELECT COUNT(*) FROM contractors_reviews WHERE contractor = ? AND created_date >= (NOW() - INTERVAL 90 DAY) LIMIT 5)/5 as recency, \n' +
            '((SELECT SUM(satisfaction) FROM contractors_reviews WHERE contractor = ?)/(SELECT COUNT(*) FROM contractors_reviews WHERE contractor = ?))/5 as reputation,\n' +
            '((SELECT COUNT(*) FROM contractors_reviews WHERE contractor = ? AND rating >= 4)/(SELECT COUNT(*) FROM contractors_reviews WHERE contractor = ?)) as great,\n' +
            '((SELECT COUNT(*) FROM contractors_reviews WHERE contractor = ? AND rating = 3)/(SELECT COUNT(*) FROM contractors_reviews WHERE contractor = ?)) as average,\n' +
            '((SELECT COUNT(*) FROM contractors_reviews WHERE contractor = ? AND rating <= 2)/(SELECT COUNT(*) FROM contractors_reviews WHERE contractor = ?)) as poor', [contractor, contractor, contractor, contractor, contractor, contractor, contractor, contractor, contractor, contractor, contractor])
    }

    static fetchByCategory(category) {
        return database.query('SELECT contractors_reviews.*, customers.name FROM contractors_reviews INNER JOIN customers ON customers.id = contractors_reviews.user WHERE contractors_reviews.category = ?', [category])
    }

    static fetchImagesByReview (id) {
        return database.query('SELECT * FROM review_images WHERE review = ?', [id])
    }

    static delete(id) {
        return database.query('DELETE FROM contractors_reviews WHERE id = ?', [id])
    }

    static approve(id) {
        return database.query('UPDATE contractors_reviews SET status = 1 WHERE (id = ?)', [id])
    }

    static reject(id) {
        return database.query('UPDATE contractors_reviews SET status = 2 WHERE (id = ?)', [id])
    }
}
