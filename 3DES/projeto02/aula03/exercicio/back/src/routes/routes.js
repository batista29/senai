const express = require('express');

const router = express.Router();

const Setor = require('../controller/setor')

router.post('/setor', Setor.create)
router.get('/setor', Setor.read)
router.get('/setor/:id', Setor.readOne)

const Produto = require('../controller/produto')

router.post('/produto', Produto.create)
router.get('/produto', Produto.read)
router.get('/produto/:id', Produto.readOne)

const Vendedor = require('../controller/vendedor')

router.post('/vendedor', Vendedor.create)
router.get('/vendedor', Vendedor.read)
router.get('/vendedor/:id', Vendedor.readOne)

const Vendas = require('../controller/vendas')

router.post('/vendas', Vendas.create)
router.get('/vendas', Vendas.read)
router.get('/vendas/:id', Vendas.readOne)

const Detalhes = require('../controller/detalhes')

router.post('/detalhes', Detalhes.create)
router.get('/detalhes', Detalhes.read)
router.get('/detalhes/:id', Detalhes.readOne)

module.exports = router;