const database = require("../util/database")

module.exports = class Category {

    static create (params){
        return database.query('INSERT INTO cities (name, state_code, country_code, latitude, longitude, tag) VALUES (?, ?, ?, ?, ?, ?)', [params.name, params.state_code, params.country_code, params.latitude, params.longitude, params.tag])
    }

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

    static update (params){
        return database.query('UPDATE cities SET name = ?, state_code = ?, country_code = ?, latitude = ?, longitude = ?, tag = ? WHERE (id = ?)', [params.name, params.state_code, params.country_code, params.latitude, params.longitude, params.tag, params.id])
    }

    static delete (id){
        return database.query('DELETE FROM cities WHERE id = ?', [id])
    }
}
