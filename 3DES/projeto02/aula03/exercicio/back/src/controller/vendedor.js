const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let vendedor = await prisma.vendedor.create({
        data: req.body
    });

    res.status(200).json(vendedor).end();
}

const read = async (req, res) => {
    let vendedor = await prisma.vendedor.findMany({
        select: {
            nome: true,
            salario: true,
            Setor: {
                select: {
                    nome: true
                }
            }
        }
    }
    );

    res.status(200).json(vendedor).end();
}

const readOne = async (req, res) => {
    let vendedor = await prisma.vendedor.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            nome: true,
            salario: true,
            Setor: {
                select: {
                    nome: true
                }
            }
        }
    });
    res.status(200).json(vendedor).end();
}

module.exports = {
    create,
    read,
    readOne
}