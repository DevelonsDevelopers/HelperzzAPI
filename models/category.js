const database = require("../util/database")

module.exports = class Category {

    static create(params) {
        return database.query('INSERT INTO categories (name, details, image, tag) VALUES (?, ?, ?, ?)', [params.name, params.details, params.image, params.tag])
    }

    static fetch(id) {
        return database.query('SELECT * FROM categories WHERE id = ?', [id])
    }

    static fetchByTag(tag) {
        return database.query('SELECT * FROM categories WHERE tag = ?', [tag])
    }

    static fetchAll() {
        return database.query('SELECT * FROM categories')
    }

    static fetchAllActive() {
        return database.query('SELECT * FROM categories WHERE status = 1')
    }

    static featured() {
        return database.query('SELECT * FROM categories WHERE featured = 1 AND status = 1')
    }

    static popular() {
        return database.query('SELECT * FROM categories WHERE popular = 1 AND status = 1')
    }

    static delete(id) {
        return database.query('DELETE FROM categories WHERE id = ?', [id])
    }

    static update(params) {
        return database.query('UPDATE categories SET name = ?, details = ?, image = ? WHERE (id = ?)', [params.name, params.details, params.image, params.id])
    }

    static changeStatus(params) {
        return database.query('UPDATE categories SET status = ? WHERE (id = ?)', [params.status, params.id])
    }

    static changeFeatured(params) {
        return database.query('UPDATE categories SET featured = ? WHERE (id = ?)', [params.featured, params.id])
    }

    static changePopular(params) {
        return database.query('UPDATE categories SET popular = ? WHERE (id = ?)', [params.popular, params.id])
    }
}
