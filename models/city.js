const database = require("../util/database")

module.exports = class Category {

    static fetch(id) {
        return database.query('SELECT * FROM cities WHERE id = ?', [id])
    }

    static fetchByTag(tag){
        return database.query('SELECT * FROM cities WHERE tag = ?', [tag])
    }

    static fetchAll() {
        return database.query('SELECT * FROM cities')
    }

    static fetchAllActive() {
        return database.query('SELECT * FROM cities WHERE status = 1')
    }
}
