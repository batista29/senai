const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "emprestimo"
});

function listarTelefone(req, res) {
    let query = "SELECT * FROM telefone";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

module.exports = {
    listarTelefone
}