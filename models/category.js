const database = require("../util/database")

module.exports = class Category {

    static create(params){
        return database.query('INSERT INTO categories (name, details, image) VALUES (?, ?, ?)', [params.name, params.details, params.image])
    }

    static fetch(id){
        return database.query('SELECT * FROM categories WHERE id = ?', [id])
    }

    static fetchAll(){
        return database.query('SELECT * FROM categories')
    }

    static fetchAllActive(){
        return database.query('SELECT * FROM categories WHERE status = 1')
    }

    static featured(){
        return database.query('SELECT * FROM categories WHERE featured = 1 AND status = 1')
    }

    static delete(id){
        return database.query('DELETE FROM categories WHERE id = ?', [id])
    }

    static changeStatus(params){
        return database.query('UPDATE categories SET status = ? WHERE (id = ?)', [params.status, params.id])
    }

    static changeFeatured(params){
        return database.query('UPDATE categories SET featured = ? WHERE (id = ?)', [params.featured, params.id])
    }

}
