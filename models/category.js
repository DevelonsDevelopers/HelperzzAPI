const database = require("../util/database")

module.exports = class Category {

    static create(params) {
        return database.query('INSERT INTO categories (name, details, image, tag, meta_title, meta_description, page_description) VALUES (?, ?, ?, ?, ?, ?, ?)', [params.name, params.details, params.image, params.tag, params.meta_title, params.meta_description, params.page_description])
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

    static banner() {
        return database.query('SELECT * FROM categories WHERE banner = 1 AND status = 1')
    }

    static categoryContractors() {
        return database.query('SELECT categories.id, categories.name as name, categories.tag as tag, "Category" as type FROM categories WHERE status = 1 UNION SELECT contractor_details.contractor as id, contractor_details.company_name as name, null as tag, "Contractor" as type FROM contractor_details INNER JOIN contractors ON contractors.id = contractor_details.contractor WHERE contractors.status = 1')
    }

    static delete(id) {
        return database.query('DELETE FROM categories WHERE id = ?', [id])
    }

    static update(params) {
        return database.query('UPDATE categories SET name = ?, details = ?, image = ?, meta_title = ?, meta_description = ?, page_description = ? WHERE (id = ?)', [params.name, params.details, params.image, params.meta_title, params.meta_description, params.page_description, params.id])
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

    static changeBanner(params) {
        return database.query('UPDATE categories SET banner = ? WHERE (id = ?)', [params.banner, params.id])
    }
}
