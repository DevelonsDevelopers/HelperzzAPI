const database = require('../util/database')

module.exports = class costGuides {

    static create (params) {
        return database.query('INSERT INTO `cost_guides` (`title`, `subtitle`, `content`, `image`) VALUES (?, ?, ?, ?)', [params.title, params.subtitle, params.content, params.image])
    }

    static fetch (id) {
        return database.query('SELECT * FROM cost_guides WHERE id = ?', [id])
    }

    static fetchByTag (tag) {
        let name = tag.replaceAll("-", " ").toUpperCase()
        return database.query('SELECT * FROM cost_guides WHERE UPPER(title) = ?', [name])
    }

    static fetchAll () {
        return database.query('SELECT * FROM cost_guides')
    }

    static fetchAllActive () {
        return database.query('SELECT * FROM cost_guides WHERE status = 1')
    }

    static featured () {
        return database.query('SELECT * FROM cost_guides WHERE status = 1 AND featured = 1')
    }

    static update (params) {
        return database.query('UPDATE cost_guides SET title = ?, subtitle = ?, content = ?, image = ? WHERE (id = ?)', [params.title, params.subtitle, params.content, params.image, params.id])
    }

    static delete(id){
        return database.query('DELETE FROM cost_guides WHERE id = ?', [id])
    }

    static changeStatus(params){
        return database.query('UPDATE cost_guides SET status = ? WHERE (id = ?)', [params.status, params.id])
    }

    static changeFeatured(params){
        return database.query('UPDATE cost_guides SET featured = ? WHERE (id = ?)', [params.featured, params.id])
    }
}
