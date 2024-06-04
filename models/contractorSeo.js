const database = require('../util/database')

module.exports = class ContractorSeo {

    static create (params){
        return database.query('INSERT INTO contractor_seo (contractor, title, description) VALUES (?, ?, ?)', [params.contractor, params.title, params.description])
    }

    static update (params){
        return database.query('UPDATE contractor_seo SET title = ?, description = ? WHERE (id = ?)', [params.title, params.description, params.id])
    }

    static fetch (id) {
        return database.query('SELECT * FROM contractor_seo WHERE id = ?', [id])
    }

}
