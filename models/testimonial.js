const database = require('../util/database')

module.exports = class Testimonial {

    static create (params) {
        return database.query('INSERT INTO `testimonials` (`user`, `review`, `rating`) VALUES (?, ?, ?)', [params.user, params.review, params.rating])
    }

    static fetch (id) {
        return database.query('SELECT * FROM testimonials WHERE id = ?', [id])
    }

    static fetchAll () {
        return database.query('SELECT * FROM testimonials')
    }

    static fetchAllActive () {
        return database.query('SELECT * FROM testimonials WHERE status = 1')
    }

    static featured () {
        return database.query('SELECT * FROM testimonials WHERE status = 1 AND featured = 1')
    }
}
