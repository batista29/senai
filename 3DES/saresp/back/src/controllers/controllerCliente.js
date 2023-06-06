const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const read = async (req, res) => {
    let cliente = await prisma.clientes.findMany({})
    res.status(200).json(cliente).end()
}

const listaUsuario = async (req, res) => {
    let cliente = await prisma.clientes.findUnique({
        select: {
            id: true,
            nome: true
        },
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(200).json(cliente).end()
}

module.exports = {
    read,
    listaUsuario
}