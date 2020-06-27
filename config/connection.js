//Require mysql and dotenv dependencies
const mysql = require('mysql');
require('dotenv').config;

//.env
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

//connect node to mysql
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected as id:' + connection.threadId);
});

//export the connection
module.exports = connection;