const mysql = require('mysql');

const con = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "provaBack"
});

module.exports = con;