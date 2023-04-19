const {
    PrismaClient
} = require('@prisma/client')

const prisma = new PrismaClient()

const read = async (req, res) => {
    let paciente = await prisma.paciente.findMany()

    res.render('index', {
        paciente
    })
}

const criar = async (req, res) => {
    let info = {
        nome_completo: req.body.nome_completo,
        nascimento: req.body.nascimento,
        peso: parseFloat(req.body.peso),
        altura: parseFloat(req.body.altura),
    }

    res.redirect('/')
}

module.exports = {
    read
}