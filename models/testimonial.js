const database = require('../util/database')

module.exports = class Testimonial {

    static create (params) {
        return database.query('INSERT INTO testimonials (name, email, location, review, rating) VALUES (?, ?, ?, ?, ?)', [params.name, params.email, params.location, params.review, params.rating])
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

    static update (params) {
        return database.query('UPDATE testimonials SET name = ?, email = ?, location = ?, review = ?, rating = ? WHERE (id = ?)', [params.name, params.email, params.location, params.review, params.rating, params.id])
    }

    static delete (id) {
        return database.query('DELETE FROM testimonials WHERE id = ?', [id])
    }

    static changeStatus(params){
        return database.query('UPDATE testimonials SET status = ? WHERE (id = ?)', [params.status, params.id])
    }

    static changeFeatured(params){
        return database.query('UPDATE testimonials SET featured = ? WHERE (id = ?)', [params.featured, params.id])
    }
}
