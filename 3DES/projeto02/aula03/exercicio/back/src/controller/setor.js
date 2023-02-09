const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let setor = await prisma.setor.create({
        data: req.body
    });

    res.status(200).json(setor).end();
}

const read = async (req, res) => {
    let setor = await prisma.setor.findMany({
        select: {
            nome: true,
            comissao: true,
            produtos: {
                select: {
                    nome: true,
                    valor: true
                }
            }
        }
    });

    res.status(200).json(setor).end();
}

const readOne = async (req, res) => {
    let setor = await prisma.setor.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            nome: true,
            comissao: true,
            produtos: {
                select: {
                    nome: true,
                    valor: true
                }
            }
        }
    });
    res.status(200).json(setor).end();
}

module.exports = {
    create,
    read,
    readOne
}