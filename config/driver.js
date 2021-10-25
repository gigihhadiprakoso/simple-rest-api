const mysql = require('mysql')
const {Client} = require('pg')

const config= require('./config')

const configurationDBString =  config.DB.driver+"://"+config.DB.user+":"+config.DB.password+"@"+config.DB.host+":"+config.DB.port+"/"+config.DB.database

let conn


switch (config.DB.driver) {
    case 'postgres':
        conn = new Client({
            connectionString: process.env.DATABASE_URL ? process.env.DATABASE_URL : configurationDBString,
            ssl:  {
                rejectUnauthorized: process.env.LIVE ? false : true
            }
        });
        conn.connect();
        break;
    case 'mysql':
        conn = mysql.createConnection(configurationDBString);
        break;
    default:
        break;
}

module.exports = conn
