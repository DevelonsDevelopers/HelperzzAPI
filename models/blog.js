const database = require('../util/database')

module.exports = class Blog {

    static create(params) {
        return database.query('INSERT INTO blogs (title, category, author, subtitle, content, image) VALUES (?, ?, ?, ?, ?, ?)', [params.title, params.category, params.author, params.subtitle, params.content, params.image])
    }

    static fetch(id) {
        return database.query('SELECT * FROM blogs WHERE id = ?', [id])
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

    static update(params) {
        return database.query('UPDATE blogs SET title = ?, category = ?, author = ?, subtitle = ?, content = ?, image = ? WHERE (id = ?)', [params.title, params.category, params.author, params.subtitle, params.content, params.image, params.id])
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
