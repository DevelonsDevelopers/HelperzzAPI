const mysql = require('mysql2')
const config = require('../config/config.json')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    port: '3306'
})

module.exports = pool.promise()
