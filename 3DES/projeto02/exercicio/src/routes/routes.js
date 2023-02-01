const express = require('express')

const router = express.Router();

const Tarefa = require('../controller/tarefas');

router.post('/tarefas/new', Tarefa.createTarefa);
router.get('/tarefas/aberto', Tarefa.listarAbertos);

module.exports = router;