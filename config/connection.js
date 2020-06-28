const mysql = require('mysql');
require('dotenv').config();

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else{}
connection = mysql.createConnection({
    host: 'gp96xszpzlqupw4k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'j9x85o4ia5sj3qqy',
    password: 'gukz93mxuhz75i65',
    port: 3306,
    database: 'qpwyk16bxgxl3km9'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected as id:' + connection.threadId);
});

module.exports = connection;