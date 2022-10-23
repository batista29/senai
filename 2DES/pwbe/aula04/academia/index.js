const express = require("express");
const cors = require('cors');
const mysql = require("mysql");

const app = express();
app.use(cors());

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'academia'
});

app.get('/academia', (req, res) => {
    let string = "select * from vw_academia";
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result);
        }
    });
});

app.listen(5000, () => {
    console.log("Respondendo na porta 5000");
});