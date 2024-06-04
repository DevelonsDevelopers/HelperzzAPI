const database = require('../util/database')

module.exports = class Blog {

    static create(params) {
        return database.query('INSERT INTO blogs (title, category, author, subtitle, content, image, seo_title, seo_description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [params.title, params.category, params.author, params.subtitle, params.content, params.image, params.seo_title, params.seo_description])
    }

    static fetch(id) {
        return database.query('SELECT * FROM blogs WHERE id = ?', [id])
    }

    static fetchByTag (tag) {
        let name = tag.replaceAll("-", " ").toUpperCase()
        return database.query('SELECT * FROM blogs WHERE UPPER(title) = ?', [name])
    }

    static fetchAll() {
        return database.query('SELECT * FROM blogs')
    }

    static fetchAllActive() {
        return database.query('SELECT * FROM blogs WHERE status = 1')
    }

    static featured() {
        return database.query('SELECT * FROM blogs WHERE featured = 1 AND status = 1')
    }

    static designs() {
        return database.query('SELECT * FROM blogs WHERE category = "Design" AND status = 1')
    }

    static improvements() {
        return database.query('SELECT * FROM blogs WHERE category = "Improvement" AND status = 1')
    }

    static updates() {
        return database.query('SELECT * FROM blogs WHERE category = "Update" AND status = 1')
    }

    static update(params) {
        return database.query('UPDATE blogs SET title = ?, category = ?, author = ?, subtitle = ?, content = ?, image = ?, seo_title = ?, seo_description = ? WHERE (id = ?)', [params.title, params.category, params.author, params.subtitle, params.content, params.image, params.id, params.seo_title, params.seo_description])
    }

    static delete(id) {
        return database.query('DELETE FROM blogs WHERE id = ?', [id])
    }

    static changeStatus(params) {
        return database.query('UPDATE blogs SET status = ? WHERE (id = ?)', [params.status, params.id])
    }

    static changeFeatured(params) {
        return database.query('UPDATE blogs SET featured = ? WHERE (id = ?)', [params.featured, params.id])
    }
}
