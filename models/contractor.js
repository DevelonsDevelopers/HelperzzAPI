const database = require('../util/database')
const Auth = require('../middleware/authMiddleware')

module.exports = class Contractor {

    static async create (params){
        const hash = await Auth.hashPassword(params.password)
        return database.query('INSERT INTO contractors (name, email, phone, password, address, image) VALUES (?, ?, ?, ?, ?, ?)', [params.name, params.email, params.phone, hash, params.address, params.image])
    }

    static fetch (id) {
        return database.query('SELECT * FROM contractors WHERE id = ?', [id])
    }

    static fetchAll () {
        return database.query('SELECT * FROM contractors')
    }

    static fetchAllActive () {
        return database.query('SELECT contractors.*, contractor_details.*, categories.name as category_name FROM contractors INNER JOIN contractor_details ON contractor_details.contractor = contractors.id INNER JOIN categories ON categories.id = contractor_details.category WHERE contractors.status = 1')
    }

    static fetchAllAssigned (request) {
        return database.query('SELECT contractors.*, contractor_details.*, categories.name as category_name, IFNULL(request_contractors.id, 0) as assigned FROM contractors INNER JOIN contractor_details ON contractor_details.contractor = contractors.id INNER JOIN categories ON categories.id = contractor_details.category LEFT JOIN request_contractors ON request_contractors.contractor = contractors.id AND request_contractors.request = ? WHERE contractors.status = 1', [request])
    }

    static featured () {
        return database.query('SELECT contractors.*, contractor_details.*, categories.name as category_name FROM contractors INNER JOIN contractor_details ON contractor_details.contractor = contractors.id INNER JOIN categories ON categories.id = contractor_details.category WHERE contractors.status = 1 AND contractors.featured = 1')
    }

    static update (params) {
        return database.query('UPDATE contractors SET name = ?, email = ?, phone = ?, password = ?, address = ?, image = ? WHERE (id = ?)', [params.name, params.email, params.phone, params.password, params.address, params.image, params.id])
    }

    static delete(id){
        return database.query('DELETE FROM contractors WHERE id = ?', [id])
    }

    static changeStatus(params){
        return database.query('UPDATE contractors SET status = ? WHERE (id = ?)', [params.status, params.id])
    }

    static changeFeatured(params){
        return database.query('UPDATE contractors SET featured = ? WHERE (id = ?)', [params.featured, params.id])
    }

}
