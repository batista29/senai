const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "emprestimo"
});

function listarClientes(req, res) {
    let query = "SELECT * FROM clientes";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function deletarClientes(req, res) {
    let query = `DELETE FROM clientes WHERE cpf = ${req.body.cpf}`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function cadastrarClientes(req, res) {
    let query = `insert into clientes values (${req.body.cpf} ,'${req.body.pri_nome}', '${req.body.sobrenome}', ${req.body.cep}, '${req.body.complemento}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

module.exports = {
    listarClientes,
    deletarClientes,
    cadastrarClientes
}