const express = require('express');
const router = express.Router();

const Cliente = require("./controllers/ClientesController");

router.get("/clientes", Cliente.listarClientes);
router.post("/clientes", Cliente.cadastrarCliente);
router.delete("/clientes", Cliente.excluirCliente);

module.exports = router;