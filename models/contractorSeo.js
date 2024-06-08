const database = require('../util/database')

module.exports = class ContractorSeo {

    static create (params){
        return database.query('INSERT INTO contractor_seo (contractor, title, description, page_description) VALUES (?, ?, ?, ?)', [params.contractor, params.title, params.description, params.page_description])
    }

    static update (params){
        return database.query('UPDATE contractor_seo SET title = ?, description = ?, page_description = ? WHERE (id = ?)', [params.title, params.description, params.page_description, params.id])
    }

    static fetch (id) {
        return database.query('SELECT * FROM contractor_seo WHERE contractor = ?', [id])
    }

}
