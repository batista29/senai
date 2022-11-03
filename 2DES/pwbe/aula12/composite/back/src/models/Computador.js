class Computador {

    readAll() {
        return "SELECT * FROM computadores";
    }

    del(id) {
        return `DELETE FROM computadores WHERE id = ${id}`;
    }
}

class ComputadorBuild {
    constructor(body) {
        this.id = body.id;
        this.produto = body.produto;
        this.preco = body.preco;
    }

    create() {
        return `INSERT INTO computadores VALUES (default,'${this.produto}',${this.preco})`;
    }
}

const computadores = [
    {
        produto: "mouse",
        preco: 350
    },
    {
        produto: "monitor",
        preco: 1250
    },
    {
        produto: "teclado",
        preco: 250
    }
]

module.exports = {
    ComputadorBuild,
    Computador,
    computadores
}