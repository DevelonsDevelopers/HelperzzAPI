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

    static fetchCustomerEmail(id) {
        return database.query('SELECT customers.email FROM contractors_reviews INNER JOIN customers ON customers.id = contractors_reviews.user WHERE contractors_reviews.id = ?', [id])
    }

    static fetchAll() {
        return database.query('SELECT contractors_reviews.*, contractor_details.company_name, customers.name as customer_name, customers.email FROM contractors_reviews INNER JOIN contractor_details ON contractor_details.contractor = contractors_reviews.contractor INNER JOIN customers ON customers.id = contractors_reviews.user ORDER BY contractors_reviews.id DESC')
    }

    static fetchByContractor(contractor) {
        return database.query('SELECT contractors_reviews.*, customers.name, customers.email FROM contractors_reviews INNER JOIN customers ON customers.id = contractors_reviews.user WHERE contractor = ?', [contractor])
    }

    static fetchApprovedByContractor(contractor) {
        return database.query('SELECT contractors_reviews.*, customers.name, customers.email FROM contractors_reviews INNER JOIN customers ON customers.id = contractors_reviews.user WHERE contractor = ? AND contractors_reviews.status = 1', [contractor])
    }

    static fetchRatings(contractor) {
        return database.query('SELECT \n' +
            '((SELECT SUM(rating) FROM contractors_reviews WHERE contractors_reviews.status = 1 AND contractor = ?)/(SELECT COUNT(*) FROM contractors_reviews WHERE contractors_reviews.status = 1 AND contractor = ?)) as avg,\n' +
            '(SELECT COUNT(*) FROM contractors_reviews WHERE contractors_reviews.status = 1 AND contractor = ? AND created_date >= (NOW() - INTERVAL 90 DAY) LIMIT 5)/5 as recency, \n' +
            '((SELECT SUM(satisfaction) FROM contractors_reviews WHERE contractors_reviews.status = 1 AND contractor = ?)/(SELECT COUNT(*) FROM contractors_reviews WHERE contractors_reviews.status = 1 AND contractor = ?))/5 as reputation,\n' +
            '((SELECT COUNT(*) FROM contractors_reviews WHERE contractors_reviews.status = 1 AND contractor = ? AND rating >= 4)/(SELECT COUNT(*) FROM contractors_reviews WHERE contractors_reviews.status = 1 AND contractor = ?)) as great,\n' +
            '((SELECT COUNT(*) FROM contractors_reviews WHERE contractors_reviews.status = 1 AND contractor = ? AND rating = 3)/(SELECT COUNT(*) FROM contractors_reviews WHERE contractors_reviews.status = 1 AND contractor = ?)) as average,\n' +
            '((SELECT COUNT(*) FROM contractors_reviews WHERE contractors_reviews.status = 1 AND contractor = ? AND rating <= 2)/(SELECT COUNT(*) FROM contractors_reviews WHERE contractors_reviews.status = 1 AND contractor = ?)) as poor', [contractor, contractor, contractor, contractor, contractor, contractor, contractor, contractor, contractor, contractor, contractor])
    }

    static fetchByCategory(category) {
        return database.query('SELECT contractors_reviews.*, customers.name, contractor_details.company_name FROM contractors_reviews INNER JOIN customers ON customers.id = contractors_reviews.user INNER JOIN contractors ON contractors.id = contractors_reviews.contractor INNER JOIN contractor_details ON contractor_details.contractor = contractors_reviews.contractor WHERE contractors_reviews.category = ? and contractors_reviews.status = 1 ORDER BY contractors_reviews.id DESC LIMIT 4', [category])
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
