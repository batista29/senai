const express = require('express');
const router = express.Router();

const Departamento = require("../controllers/departamento.controller");

router.post("/create", Departamento.create);
router.delete("/del/:cod_depto", Departamento.del);
router.get("/readAll", Departamento.readAll);

module.exports = router;