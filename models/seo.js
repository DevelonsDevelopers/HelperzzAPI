const database = require("../util/database")

module.exports = class Category {

    static create (params){
        return database.query('INSERT INTO seo (page_name, route, title, meta_content, meta_description) VALUES (?, ?, ?, ?, ?)', [params.page_name, params.route, params.title, params.meta_content, params.meta_description])
    }

    static fetch(id) {
        return database.query('SELECT * FROM seo WHERE id = ?', [id])
    }

    static fetchAll() {
        return database.query('SELECT * FROM seo')
    }

    static update (params){
        return database.query('UPDATE seo SET page_name = ?, route = ?, title = ?, meta_content = ?, meta_description = ? WHERE (id = ?)', [params.page_name, params.route, params.title, params.meta_content, params.meta_description, params.id])
    }

    static delete (id){
        return database.query('DELETE FROM seo WHERE id = ?', [id])
    }
}
