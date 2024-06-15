const database = require("../util/database")

module.exports = class Category {

    static create (params){
        return database.query('INSERT INTO seo (page_name, route, title, meta_content, meta_description) VALUES (?, ?, ?, ?, ?)', [params.page_name, params.route, params.title, params.meta_content, params.meta_description])
    }

    static createCityCategory (params){
        return database.query('INSERT INTO city_category_seo (city, category, meta_title, meta_description, page_description) VALUES (?, ?, ?, ?, ?)', [params.city, params.category, params.meta_title, params.meta_description, params.page_description])
    }

    static fetch(id) {
        return database.query('SELECT * FROM seo WHERE id = ?', [id])
    }

    static fetchCityCategorySEO(id){
        return database.query('SELECT * FROM city_category_seo WHERE id = ?', [id])
    }

    static fetchCityCategorySEOByTag(city_tag, category_tag){
        let city_name = city_tag.replaceAll("-", " ").toUpperCase()
        return database.query('SELECT * FROM (SELECT cities.id as city_id, cities.name as city_name, categories.id as category_id, categories.name as category_name, categories.tag FROM cities CROSS JOIN categories ORDER BY cities.name) t LEFT JOIN city_category_seo ON city_category_seo.city = city_id AND city_category_seo.category = category_id WHERE UPPER(city_name) = ? AND UPPER(tag) = ?', [city_name, category_tag])
    }

    static fetchContractorPage(tag){
        let name = tag.replaceAll("-", " ").toUpperCase()
        return database.query('SELECT contractor_seo.* FROM contractor_seo INNER JOIN contractor_details ON contractor_details.contractor = contractor_seo.contractor WHERE UPPER(contractor_details.company_name) = ?', [name])
    }

    static fetchCategoryPage(tag){
        return database.query('SELECT * FROM categories WHERE tag = ?', [tag])
    }

    static fetchBlogPage (tag) {
        let name = tag.replaceAll("-", " ").toUpperCase()
        return database.query('SELECT * FROM blogs WHERE UPPER(title) = ?', [name])
    }

    static fetchSubcategoryPage(tag){
        let name = tag.replaceAll("-", " ").toUpperCase()
        return database.query('SELECT * FROM subcategories WHERE UPPER(name) = ?', [name])
    }

    static fetchCostGuidePage (tag) {
        let name = tag.replaceAll("-", " ").toUpperCase()
        return database.query('SELECT * FROM cost_guides WHERE UPPER(title) = ?', [name])
    }

    static fetchCityCategory () {
        return database.query('SELECT t.*, IFNULL(id, 0) as SEO FROM (SELECT cities.id as city_id, cities.name as city_name, categories.id as category_id, categories.name as category_name FROM cities CROSS JOIN categories ORDER BY cities.name) t LEFT JOIN city_category_seo ON city_category_seo.city = city_id AND city_category_seo.category = category_id')
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

    static updateCityCategory (params) {
        return database.query('UPDATE city_category_seo SET city = ?, category = ?, meta_title = ?, meta_description = ?, page_description = ? WHERE (id = ?)', [params.city, params.category, params.meta_title, params.meta_description, params.page_description, params.id])
    }

    static delete (id){
        return database.query('DELETE FROM seo WHERE id = ?', [id])
    }
}
