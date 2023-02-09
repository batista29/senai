const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let produto = await prisma.produto.create({
        data: req.body
    });

    res.status(200).json(produto).end();
}

const read = async (req, res) => {
    let produto = await prisma.produto.findMany({
        select: {
            nome: true,
            valor: true,
            Setor: {
                select: {
                    nome: true
                }
            }
        }
    }
    );

    res.status(200).json(produto).end();
}

const readOne = async (req, res) => {
    const produto = await prisma.produto.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            nome: true,
            valor: true,
            Setor: {
                select: {
                    nome: true
                }
            }
        }
    });

    res.status(200).json(produto).end();
}

module.exports = {
    create,
    read,
    readOne
}