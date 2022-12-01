const Express = require('express');

const router = Express.Router();

const Alunos = require('../controller/alunos.controller');

router.get("/alunos", Alunos.toReadAll)
router.get("/alunos/:id_aluno", Alunos.toRead)
router.post("/alunos", Alunos.toCreate)
router.delete("/alunos", Alunos.toDel)
router.put("/alunos", Alunos.toUpdate)


module.exports = router;