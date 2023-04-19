const express = require('express')
const router = express.Router()

const paciente = require('../controllers/paciente')

router.get('/', paciente.read)

module.exports = router