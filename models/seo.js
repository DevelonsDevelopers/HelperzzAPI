const database = require("../util/database")

module.exports = class Category {

    static create (params){
        return database.query('INSERT INTO seo (page_name, route, title, meta_content, meta_description) VALUES (?, ?, ?, ?, ?)', [params.page_name, params.route, params.title, params.meta_content, params.meta_description])
    }

    static fetch(id) {
        return database.query('SELECT * FROM seo WHERE id = ?', [id])
    }

    static fetchContractorPage(tag){
        let name = tag.replaceAll("-", " ").toUpperCase()
        return database.query('SELECT * FROM contractor_seo INNER JOIN contractor_details ON contractor_details.contractor = contractor_seo.contractor WHERE UPPER(contractor_details.company_name) = ?', [name])
    }

    static fetchCategoryPage(tag){
        return database.query('SELECT * FROM categories WHERE tag = ?', [tag])
    }

    static fetchBlogPage (tag) {
        let name = tag.replaceAll("-", " ").toUpperCase()
        return database.query('SELECT * FROM blogs WHERE UPPER(title) = ?', [name])
    }

    static fetchByRoute(route) {
        return database.query('SELECT * FROM seo WHERE route = ?', [route])
    }

    static fetchAll() {
        return database.query('SELECT * FROM seo')
    }

    static update (params){
        return database.query('UPDATE seo SET page_name = ?, route = ?, title = ?, meta_content = ?, meta_description = ? WHERE (id = ?)', [params.page_name, params.route, params.title, params.meta_content, params.meta_description, params.id])
    }

    static delete (id){
        return database.query('DELETE FROM seo WHERE id = ?', [id])
    }
}
