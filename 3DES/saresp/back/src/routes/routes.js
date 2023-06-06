const express = require('express')
const router = express.Router()

const clientes = require('../controllers/controllerCliente')

router.get('/getClientes', clientes.read);
router.get('/getUmCliente/:id', clientes.listaUsuario);

const automoveis = require('../controllers/controllerAutomoveis')

router.get('/getAutomoveis', automoveis.read);
router.get('/getUmAuto/:id', automoveis.listarAutomoveis);

const alocacao = require('../controllers/controllerAlocacao')

router.get('/getAlocacao', alocacao.read);
router.get('/getUmAlocacao/:id', alocacao.listarAlocacao);

module.exports = router