const pizzas = {
    pizza1: {
        nome: "Pepperoni",
        borda: "Borda de catupiry",
        qntd: 1,
        valor: 75,
    },
    pizza2: {
        nome: "Marguerita",
        borda: "sem borda",
        qntd: 1,
        valor: 60,
    },
    pizza3: {
        nome1: "Frango c/ Catupiry",
        nome2: "Lombo canadense",
        borda: "cheddar",
        tipo: "meio a meio",
        qntd: 1,
        valor: 60,
    },
    pizza4: {
        nome: "Calabresa",
        qntd: 2,
        valor: 50,
    }
}

const valorTotal = {
    total: (pizzas.pizza1.qntd * pizzas.pizza1.valor) + (pizzas.pizza2.qntd * pizzas.pizza2.valor) + (pizzas.pizza3.qntd * pizzas.pizza3.valor) + (pizzas.pizza4.qntd * pizzas.pizza4.valor)
}

const pedido = {
    "Pizzas": "Pizza 1: " + pizzas.pizza1.nome + ", " + pizzas.pizza1.borda + ", Pizza 2: " + pizzas.pizza2.nome + ", " + pizzas.pizza2.borda + ", Pizza 3: " + pizzas.pizza3.tipo + pizzas.pizza3.nome1 + " e " + pizzas.pizza3.nome2 + ", " + pizzas.pizza3.borda + ", Pizza 4: " + pizzas.pizza4.nome,
    "data": "22/12/2021",
    "hora": "20:30",
    "Total pedido": valorTotal
}