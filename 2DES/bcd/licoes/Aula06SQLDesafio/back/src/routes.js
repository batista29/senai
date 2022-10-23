const Express = require('express');

const router = Express.Router();

const ClientesController = require("./controllers/ClienteController");
const TelefonesController = require("./controllers/TelefoneController");
const EmprestimosController = require("./controllers/EmprestimosController");

router.get("/clientes", ClientesController.listarClientes);
router.delete("/clientes", ClientesController.deletarClientes);
router.post("/clientes", ClientesController.cadastrarClientes);

router.get("/telefones", TelefonesController.listarTelefone);

router.get("/emprestimos", EmprestimosController.listarEmprestimos);

module.exports = router;