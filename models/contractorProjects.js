const database = require('../util/database')

module.exports = class contractorProjects {

    static create(params) {
        return database.query('INSERT INTO contractors_projects (contractor, title, details, subcategory, date) VALUES (?, ?, ?, ?, ?)', [params.contractor, params.title, params.details, params.subcategory, params.date])
    }

    static addImage(params) {
        return database.query('INSERT INTO project_images (project, image) VALUES (?, ?)', [params.project, params.image])
    }

    static fetch(id) {
        return database.query('SELECT * FROM contractors_projects WHERE id = ?', [id])
    }

    static fetchByContractor(contractor) {
        return database.query('SELECT * FROM contractors_projects WHERE contractor = ?', [contractor])
    }

    static delete(id) {
        return database.query('DELETE FROM contractors_projects WHERE id = ?', [id])
    }

    static fetchImagesByProject (id) {
        return database.query('SELECT * FROM project_images WHERE project = ?', [id])
    }
}
