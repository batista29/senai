const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const read = async (req, res) => {
    let alocacao = await prisma.alocacao.findMany({
        select: {
            area:true,
            automovel: true,
        }
    })
    res.status(200).json(alocacao).end()
}

const listarAlocacao = async (req, res) => {
    let alocacao = await prisma.alocacao.findUnique({
        select: {
            id: true,
            nome: true,
            Automoveis: {
                select: {
                    model: true,
                    preco: true
                }
            }
        },
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(200).json(alocacao).end()
}

module.exports = {
    read,
    listarAlocacao
}