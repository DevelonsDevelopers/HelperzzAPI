const database = require('../util/database')

module.exports = class RequestContractor {

    static create (params){
        return database.query('INSERT INTO request_contractors (request, contractor) VALUES (?, ?)', [params.request, params.contractor])
    }

    static fetch (id){
        return database.query('SELECT * FROM request_contractors WHERE id = ?', [id])
    }

    static delete (id){
        return database.query('DELETE FROM request_contractors WHERE id = ?', [id])
    }
}
