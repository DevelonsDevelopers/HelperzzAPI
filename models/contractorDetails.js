const database = require('../util/database')

module.exports = class ContractorDetails {

    static create (params){
        return database.query('INSERT INTO contractor_details (contractor, company_name, address, postal_code, category, skills, service_areas, availability_days, availability_hours, website, description, trust_seal) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [params.contractor, params.company_name, params.address, params.postal_code, params.category, params.skills, params.service_areas, params.availability_days, params.availability_hours, params.website, params.description, params.trust_seal])
    }

    static update (params){
        return database.query('UPDATE contractor_details SET company_name = ?, address = ?, postal_code = ?, category = ?, skills = ?, service_areas = ?, availability_days = ?, availability_hours = ?, website = ?, description = ?, trust_seal = ? WHERE (id = ?)', [params.company_name, params.address, params.postal_code, params.category, params.skills, params.service_areas, params.availability_days, params.availability_hours, params.website, params.description, params.trust_seal, params.id])
    }

    static fetch (id)  {
        return database.query('SELECT contractor_details.*, categories.name as category_name, categories.tag as tag FROM contractor_details INNER JOIN categories ON categories.id = contractor_details.category WHERE contractor = ?', [id])
    }

    static popularContractors () {
        return database.query('SELECT contractor_details.*, (SELECT COUNT(*) FROM request_contractors WHERE request_contractors.contractor = contractor_details.contractor) as leads, categories.name as category_name FROM contractor_details INNER JOIN categories ON categories.id = contractor_details.category ORDER BY leads DESC LIMIT 10')
    }

    static recentContractors () {
        return database.query('SELECT contractor_details.*, categories.name as category_name FROM contractor_details INNER JOIN categories ON categories.id = contractor_details.category ORDER BY contractor DESC LIMIT 10')
    }
}
