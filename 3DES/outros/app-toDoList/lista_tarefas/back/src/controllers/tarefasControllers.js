const Tarefas = require("../models/tarefas")
const con = require("../dao/dao");

function listarAbertos(req, res) {
    con.query(Tarefas.toReadAbertas(), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.status(500).end();
        }
    })
};

function listarFinalizada(req, res) {
    con.query(Tarefas.toReadFinalizada(), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.status(500).end();
        }
    })
};

function listarCancelada(req, res) {
    con.query(Tarefas.toReadCancelada(), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.status(500).end();
        }
    })
};

function createTarefa(req, res) {
    con.query(Tarefas.toCreate(req.body), (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(500).json(err).end();
        }
    });
};

function editarTarefa(req, res){
    con.query(Tarefas.toUpdateCancelada(req.body), (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function editarTarefaFinalizada(req, res){
    con.query(Tarefas.toUpdateFinalizada(req.body), (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

module.exports = {
    listarFinalizada,
    listarCancelada,
    listarAbertos,
    createTarefa,
    editarTarefa,
    editarTarefaFinalizada
}