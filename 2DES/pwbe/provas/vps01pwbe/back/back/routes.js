const Express = require('express');

const router = Express.Router();

const ProdutosController = require("./controllers/ProdutosController");
const DepartamentosController = require("./controllers/DepartamentoController");

router.get("/produtos", ProdutosController.listarProdutos);
router.get("/produtos:Dep", ProdutosController.listarProdutosDepartamentos);
router.get("/produtos:Data", ProdutosController.listarProdutosData);
router.post("/produtos", ProdutosController.cadastrarProdutos);

router.get("/departamentos", DepartamentosController.listarDepartamentos);
router.post("/departamentos", DepartamentosController.cadastrarDepartamentos);
router.delete("/departamentos", DepartamentosController.deletarDepartamentos);

module.exports = router;