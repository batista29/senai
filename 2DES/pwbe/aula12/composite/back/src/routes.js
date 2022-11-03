const express = require('express');
const router = express.Router();

const Computador = require("./controllers/ComputadorController");

router.get("/", Computador.prototype);
router.get("/read", Computador.listar);
router.post("/create", Computador.cadastrar);
router.delete("/del/:id", Computador.excluir);

module.exports = router;