const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const read = async (req, res) => {
    let automoveis = await prisma.automoveis.findMany({
    })
    res.status(200).json(automoveis).end()
}

const listarAutomoveis = async (req, res) => {
    let automoveis = await prisma.automoveis.findUnique({
        select: {
            id: true,
            nome: true
        },
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(200).json(automoveis).end()
}

module.exports = {
    read,
    listarAutomoveis
}