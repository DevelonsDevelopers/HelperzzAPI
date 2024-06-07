const database = require('../util/database')

module.exports = class RequestContractor {

    static create (params){
        return database.query('INSERT INTO request_contractors (request, contractor) VALUES (?, ?)', [params.request, params.contractor])
    }

    static fetch (id){
        return database.query('SELECT * FROM request_contractors WHERE id = ?', [id])
    }

    static fetchByContractor(contractor){
        return database.query('SELECT service_requests.*, subcategories.name as subcategory_name, customers.name as customer_name FROM request_contractors INNER JOIN service_requests ON service_requests.id = request_contractors.request INNER JOIN subcategories ON subcategories.id = service_requests.subcategory INNER JOIN customers ON customers.id = service_requests.user WHERE contractor = ?', [contractor])
    }

    static fetchRequests(request){
        return database.query('SELECT contractor_details.* FROM request_contractors INNER JOIN contractors ON contractors.id = request_contractors.contractor INNER JOIN contractor_details ON contractor_details.contractor = contractors.id WHERE request = ?', [request])
    }

    static delete (id){
        return database.query('DELETE FROM request_contractors WHERE id = ?', [id])
    }
}
