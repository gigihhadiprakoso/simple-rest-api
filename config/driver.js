const mysql = require('mysql')
const {Client} = require('pg')

const config= require('./config')
let conn

switch (config.DB.driver) {
    case 'postgres':
        conn = new Client({
            user: config.DB.user,
            host: config.DB.host,
            database: config.DB.database,
            password: config.DB.password,
            port: config.DB.port
        })
        conn.connect();
        break;
    case 'mysql':
        init = {
            host: config.DB.host,
            user: config.DB.user,
            password: config.DB.password,
            database: config.DB.database,
        }
        conn = mysql.createConnection(init);
        break;
    default:
        break;
}

module.exports = conn
