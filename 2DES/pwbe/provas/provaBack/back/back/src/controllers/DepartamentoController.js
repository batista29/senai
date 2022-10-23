const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "solicitacoes"
});

function listarDepartamentos(req, res) {
    let query = "SELECT * FROM Departamentos";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function cadastrarDepartamentos(req, res) {
    let query = `INSERT INTO Departamentos VALUES (${req.body.Cod_Depto},'${req.body.Nome_Depto}')`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function deletarDepartamentos(req, res) {
    let query = `DELETE FROM Departamentos WHERE Cod_Depto = '${req.body.Cod_Depto}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};


module.exports = {
    deletarDepartamentos,
    cadastrarDepartamentos,
    listarDepartamentos
}