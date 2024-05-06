const database = require('../util/database')

module.exports = class SuccessStories {

    static create(params) {
        return database.query('INSERT INTO success_stories (title, subtitle, description, youtube_link, image) VALUES (?, ?, ?, ?, ?)', [params.title, params.subtitle, params.description, params.youtube_link, params.image])
    }

    static fetch(id) {
        return database.query('SELECT * FROM success_stories WHERE id = ?', [id])
    }

    static fetchAll() {
        return database.query('SELECT * FROM success_stories')
    }

    static fetchAllActive() {
        return database.query('SELECT * FROM success_stories WHERE status = 1')
    }

    static popular() {
        return database.query('SELECT * FROM success_stories WHERE popular = 1 AND status = 1 LIMIT 1')
    }

    static update(params) {
        return database.query('UPDATE success_stories SET title = ?, subtitle = ?, description = ?, youtube_link = ?, image = ? WHERE (id = ?)', [params.title, params.subtitle, params.description, params.youtube_link, params.image, params.id])
    }

    static delete(id) {
        return database.query('DELETE FROM success_stories WHERE id = ?', [id])
    }

    static changeStatus(params) {
        return database.query('UPDATE success_stories SET status = ? WHERE (id = ?)', [params.status, params.id])
    }

    static changePopular(params) {
        return database.query('UPDATE success_stories SET popular = ? WHERE (id = ?)', [params.popular, params.id])
    }
}
