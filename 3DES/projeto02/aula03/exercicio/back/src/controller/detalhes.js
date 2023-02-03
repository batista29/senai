const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let detalhes = await prisma.detalhe.create({
        data: req.body
    });

    res.status(200).json(detalhes).end();
}

const read = async (req, res) => {
    let detalhes = await prisma.detalhe.findMany({
        select: {
            id: true,
            id_prod: true,
            id_venda: true,
            Produto: {
                select: {
                    nome: true
                }
            }
        }
    });

    res.status(200).json(detalhes).end();
}

const readOne = async (req, res) => {
    let detalhes = await prisma.detalhe.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            id: true,
            id_prod: true,
            id_venda: true,
            Produto: {
                select: {
                    nome: true
                }
            }
        }
    });
    res.status(200).json(detalhes).end();
}

module.exports = {
    create,
    read,
    readOne
}