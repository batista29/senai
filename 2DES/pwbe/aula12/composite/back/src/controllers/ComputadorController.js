const model = require('../models/Computador');

//Pattern singleton (Único método de acesso ao Banco de dados)
const con = require('../dao/connection');

//Pattern factory (Fabrica o objeto Venda com ou sem dados)
function fabrica(obj) {
    if (obj == undefined)
        return new model.Computador();
    else
        return new model.ComputadorBuild(obj);
}

//Pattern prototype (Faz uma consulta ao banco de dados, caso não possua registro, cadastra 3 protótipos)
const prototype = (req, res) => {
    let computador = fabrica();
    con.query(computador.readAll(), (err, result) => {
        if (err == null) {
            if (result.length == 0) {
                model.computadores.forEach(e => {
                    let v = fabrica(e);
                    con.query(v.create());
                });
                res.json({ registros: model.computadores.length, computadores: model.computadores }).end();
            } else
                res.json({ status: "Online", registros: result.length }).end();
        } else {
            res.status(500).json({ err: err }).end();
        }
    });
}

//CRUD
const cadastrar = (req, res) => {
    let computador = fabrica(req.body);
    con.query(computador.create(), (err, result) => {
        if (err == null) {
            res.status(201).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

const listar = (req, res) => {
    let computador = fabrica();
    con.query(computador.readAll(), (err, result) => {
        if (err == null) {
            res.json(result).end();
        }
    });
}

const excluir = (req, res) => {
    let computador = fabrica();
    con.query(computador.del(req.params.id), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

module.exports = {
    prototype,
    cadastrar,
    listar,
    excluir
}