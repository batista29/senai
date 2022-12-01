const Alunos = require('../model/alunos');
con = require("../dao/connection")

const toCreate = (req, res) => {
    con.query(Alunos.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).end();
        } else {
            res.status(500).json(err).end();
        }
    });
};

const toReadAll = (req, res) => {
    con.query(Alunos.toReadAll(), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.status(err).end();
        }
    })
};

const toRead = (req, res) => {
    con.query(Alunos.toRead(req.params), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.status(500).end();
        }
    })
};


const toUpdate = (req, res) => {
    con.query(Alunos.toUpdate(req.body), (err, result) => {
        if (err == null) {
            res.json(result).status(204).end();
        } else {
            res.status(400).end();
        }
    });
};

const toDel = (req, res) => {
    con.query(Alunos.toDel(req.body), (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

module.exports = {
    toCreate,
    toReadAll,
    toRead,
    toUpdate,
    toDel
}