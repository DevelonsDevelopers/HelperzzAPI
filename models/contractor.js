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
        return database.query('SELECT * FROM contractors INNER JOIN contractor_details ON contractor_details.contractor = contractors.id INNER JOIN categories ON categories.id = contractor_details.category WHERE contractors.status = 1')
    }

    static featured () {
        return database.query('SELECT * FROM contractors INNER JOIN contractor_details ON contractor_details.contractor = contractors.id INNER JOIN categories ON categories.id = contractor_details.category WHERE status = 1 AND featured = 1')
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
