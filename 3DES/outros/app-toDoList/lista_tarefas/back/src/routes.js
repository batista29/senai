const express = require('express');
const router = express.Router();

const TarefasController = require("./controllers/tarefasControllers");

router.get("/tarefas/aberto", TarefasController.listarAbertos);
router.get("/tarefas/finalizada", TarefasController.listarFinalizada);
router.get("/tarefas/cancelada", TarefasController.listarCancelada);

router.post("/tarefas/new", TarefasController.createTarefa);

router.put("/tarefas/cancela/tarefa", TarefasController.editarTarefa);

router.put("/tarefas/finaliza/tarefa", TarefasController.editarTarefaFinalizada);

module.exports = router;