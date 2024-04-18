const database = require('../util/database')

module.exports = class contractorAreas {

    static create(params) {
        return database.query('INSERT INTO contractor_areas (contractor, city) VALUES (?, ?)', [params.contractor, params.city])
    }

    static fetch(id) {
        return database.query('SELECT * FROM contractor_areas WHERE id = ?', [id])
    }

    static fetchByContractor(contractor) {
        return database.query('SELECT cities.*, IFNULL(contractor_areas.id, 0) as assigned FROM cities LEFT JOIN contractor_areas ON contractor_areas.city = cities.id AND contractor_areas.contractor = ?', [contractor])
    }

    static delete(id) {
        return database.query('DELETE FROM contractor_areas WHERE id = ?', [id])
    }
}
