const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let vendas = await prisma.vendas.create({
        data: req.body
    });

    res.status(200).json(vendas).end();
}

const read = async (req, res) => {
    let vendas = await prisma.vendas.findMany();

    res.status(200).json(vendas).end();
}

const readOne = async (req, res) => {
    let vendas = await prisma.vendas.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            id: true,
            data: true,
            Detalhe: {
                select: {
                    id_prod: true,
                    quantidade: true
                }
            }
        }
    });
    res.status(200).json(vendas).end();
}

module.exports = {
    create,
    read,
    readOne
}