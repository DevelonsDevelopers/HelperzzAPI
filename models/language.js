const database = require('../util/database')

module.exports = class Language {

    static create (params) {
        return database.query('INSERT INTO languages (language) VALUES (?)', [params.language])
    }

    static fetch (id){
        return database.query('SELECT * FROM languages WHERE id = ?', [id])
    }

    static fetchAll (params){
        return database.query('SELECT * FROM languages')
    }

    static update (params){
        return database.query('UPDATE languages SET language = ? WHERE (id = ?)', [params.language, params.id])
    }

    static delete (id){
        return database.query('DELETE FROM languages WHERE (id = ?)', [id])
    }
}
