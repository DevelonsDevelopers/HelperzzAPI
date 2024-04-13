const database = require('../util/database')

module.exports = class Highlight {

    static create(params){
        return database.query('INSERT INTO highlights (highlight, icon) VALUES (?, ?)', [params.highlight, params.icon])
    }

    static fetch(id){
        return database.query('SELECT * FROM highlights WHERE id = ?', [id])
    }

    static fetchAll(){
        return database.query('SELECT * FROM highlights')
    }

    static update(params){
        return database.query('UPDATE highlights SET highlight = ?, icon = ? WHERE (id = ?)', [params.highlight, params.icon, params.id])
    }

    static delete (id){
        return database.query('DELETE FROM highlights WHERE (id = ?)', [id])
    }
}
