const database = require('../util/database')
const Auth = require('../middleware/authMiddleware')

module.exports = class Contractor {

    static async create (params){
        const hash = await Auth.hashPassword(params.password)
        return database.query('INSERT INTO contractors (name, email, phone, password, address, image, status, checked) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [params.name, params.email, params.phone, hash, params.address, params.image, params.checked, params.status])
    }

    static fetch (id) {
        return database.query('SELECT * FROM contractors WHERE id = ?', [id])
    }

    static fetchByTag (tag) {
        let name = tag.replaceAll("-", " ").toUpperCase()
        return database.query('SELECT contractors.* FROM contractors INNER JOIN contractor_details ON contractor_details.contractor = contractors.id WHERE UPPER(contractor_details.company_name) = ?', [name])
    }

    static fetchAll () {
        return database.query('SELECT contractors.*, contractor_details.company_name, contractor_details.address as company_address, contractor_details.postal_code, contractor_details.created_date FROM contractors LEFT JOIN contractor_details ON contractor_details.contractor = contractors.id ORDER BY contractors.id DESC')
    }

    static fetchAllActive () {
        return database.query('SELECT contractors.*, contractor_details.*, categories.name as category_name FROM contractors INNER JOIN contractor_details ON contractor_details.contractor = contractors.id INNER JOIN categories ON categories.id = contractor_details.category WHERE contractors.status = 1')
    }

    static fetchAllAssigned (request) {
        return database.query('SELECT contractors.*, contractor_details.*, categories.name as category_name, IFNULL(request_contractors.id, 0) as assigned FROM contractors INNER JOIN contractor_details ON contractor_details.contractor = contractors.id INNER JOIN categories ON categories.id = contractor_details.category LEFT JOIN request_contractors ON request_contractors.contractor = contractors.id AND request_contractors.request = ? WHERE contractors.status = 1', [request])
    }

    static fetchByCategory (params) {
        let filter1 = ""
        let filter2 = ""
        let filter3 = ""
        if (params.isHighlight){
            filter1 = `INNER JOIN contractor_highlights ON contractor_highlights.contractor = contractors.id AND contractor_highlights.highlight IN (${params.highlights})`
        }
        if (params.isLanguage){
            filter2 = `INNER JOIN contractor_languages ON contractor_languages.contractor = contractors.id AND contractor_languages.language IN (${params.languages})`
        }
        if (params.isRatings){
            filter3 = `WHERE ratings/users IN (${params.ratings})`
        }
        let query = `SELECT t.*, (SELECT MAX(image) FROM project_images WHERE project_images.id = t.project_id) as cover FROM (SELECT distinct(contractors.id) as id, (SELECT COUNT(*) FROM contractors_projects WHERE contractors_projects.contractor = contractors.id) as projects, IFNULL((SELECT MAX(id) FROM contractors_projects WHERE contractors_projects.contractor = contractors.id), 0) as project_id, contractors.name, contractors.email, contractors.phone, contractors.image, contractor_details.company_name, contractor_details.address, contractor_details.postal_code, contractor_details.category, contractor_details.skills, contractor_details.service_areas, contractor_details.availability_days, contractor_details.availability_hours, contractor_details.website, contractor_details.description, contractor_details.trust_seal, categories.name as category_name, IFNULL(SUM(contractors_reviews.rating) OVER(partition by contractors.id), 0) as ratings, COUNT(contractors_reviews.rating) OVER(partition by contractors.id) as users FROM contractors INNER JOIN contractor_details ON contractor_details.contractor = contractors.id INNER JOIN categories ON categories.id = contractor_details.category LEFT JOIN contractors_reviews ON contractors_reviews.contractor = contractors.id AND contractors_reviews.status = 1 ${filter1} ${filter2} WHERE contractor_details.category = ? AND contractors.status = 1) t ${filter3}`
        return database.query(query, [params.category])
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
