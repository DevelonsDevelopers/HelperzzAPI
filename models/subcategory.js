const database = require('../util/database')

module.exports = class Subcategory {

    static create (params) {
        return database.query('INSERT INTO subcategories (category, name, meta_title, meta_description) VALUES (?, ?, ?, ?)' , [params.category, params.name, params.meta_title, params.meta_description])
    }

    static fetch (id) {
        return database.query('SELECT subcategories.*, categories.name as category_name FROM subcategories INNER JOIN categories ON categories.id = subcategories.category WHERE subcategories.id = ?', [id])
    }

    static fetchByTag(tag){
        let name = tag.replaceAll("-", " ").toUpperCase()
        return database.query('SELECT * FROM subcategories WHERE UPPER(name) = ?', [name])
    }

    static fetchAll () {
        return database.query('SELECT subcategories.*, categories.name as category_name FROM subcategories INNER JOIN categories ON categories.id = subcategories.category ORDER BY subcategories.id DESC')
    }

    static fetchByCategory (id) {
        return database.query('SELECT subcategories.*, categories.name as category_name FROM subcategories INNER JOIN categories ON categories.id = subcategories.category WHERE subcategories.category = ? AND subcategories.status = 1', [id])
    }

    static fetchAllActive () {
        return database.query('SELECT * FROM subcategories WHERE status = 1')
    }

    static update (params) {
        return database.query('UPDATE subcategories SET category = ?, name = ?, meta_title = ?, meta_description = ? WHERE (id = ?)', [params.category, params.name, params.meta_title, params.meta_description, params.id])
    }

    static delete (id) {
        return database.query('DELETE FROM subcategories WHERE id = ?', [id])
    }

    static changeStatus(params){
        return database.query('UPDATE subcategories SET status = ? WHERE (id = ?)', [params.status, params.id])
    }
}
