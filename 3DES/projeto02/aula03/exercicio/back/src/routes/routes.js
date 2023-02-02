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

module.exports = router;