const mysql = require('mysql')
const {database} = require('../services/keys')
const util = require('util')

const pool = mysql.createPool(database);

pool.getConnection((err,connection) =>{
    if(connection) connection.release();
    console.log('db is connect');
    return
});

pool.query = util.promisify(pool.query)

module.exports = pool