const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const createTarefa = async (req, res) => {

    const tarefas = await prisma.Tarefa.create({
        data: req.body
    });

    res.status(200).json(tarefas).end();
};

const listarAbertos = async (req, res) => {
    const tarefas = await prisma.Tarefa.findMany({
        where: {
            'Status_tarefa': 'Aberto'
        }
    })
    res.status(200).json(tarefas).end();
};

function listarFinalizada(req, res) {

};

function listarCancelada(req, res) {

};

function editarTarefa(req, res) {

};

function editarTarefaFinalizada(req, res) {

};

module.exports = {
    // listarFinalizada,
    // listarCancelada,
    listarAbertos,
    createTarefa,
    // editarTarefa,
    // editarTarefaFinalizada
}