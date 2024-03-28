const database = require('../util/database')

module.exports = class ContractorDetails {

    static async create (params){
        return database.query('INSERT INTO contractor_details (contractor, company_name, address, postal_code, category, skills, service_areas, availability_days, availability_hours, website, description, trust_seal) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [params.contractor, params.company_name, params.address, params.postal_code, params.category, params.skills, params.service_areas, params.availability_days, params.availability_hours, params.website, params.description, params.trust_seal])
    }

    static async update (params){
        return database.query('UPDATE contractor_details SET company_name = ?, address = ?, postal_code = ?, category = ?, skills = ?, service_areas = ?, availability_days = ?, availability_hours = ?, website = ?, description = ?, trust_seal = ? WHERE (id = ?)', [params.company_name, params.address, params.postal_code, params.category, params.skills, params.service_areas, params.availability_days, params.availability_hours, params.website, params.description, params.trust_seal, params.id])
    }

    static async fetch (id)  {
        return database.query('SELECT * FROM contractor_details WHERE contractor = ?', [id])
    }

}
