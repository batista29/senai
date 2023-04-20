const express = require('express')
const router = express.Router()

const paciente = require('../controllers/paciente')

router.get('/', paciente.read)
router.post('/criar/paciente', paciente.criar)

module.exports = router