const main = document.querySelector('.main')
const exe = document.querySelector('.lista')

function carregar() {
    const options = {
        method: 'GET'
    };

    fetch('http://localhost:3000/detalhes', options)
        .then(response => response.json())
        .then(res => {
            res.forEach(e => {
                let tabela = exe.cloneNode(true)
                tabela.classList.remove("model")

                tabela.querySelector('#produto').innerHTML = 'Produto: ' + e.Produto.nome
                tabela.querySelector('#vendedor').innerHTML = 'Vendedor: ' + e.Vendas.Vendedor.nome
                tabela.querySelector('#salario').innerHTML = 'salario: ' + e.Vendas.Vendedor.salario

                main.appendChild(tabela)
            });
        })
}

function buscar() {
    let id_busca = document.querySelector('#id_busca').value

    const options = { method: 'GET' };

    fetch(`http://localhost:3000/detalhes/${id_busca}`, options)
        .then(response => response.json())
        .then(res => {

            document.querySelector('#produtoBusca').innerHTML = 'Data: ' + res.Produto.nome
            document.querySelector('#salarioBusca').innerHTML = 'Salario: ' + res.Vendas.Vendedor.salario
            document.querySelector('#vendedorBusca').innerHTML = 'Vendedor: ' + res.Vendas.Vendedor.nome
        })
}

function enviar() {
    let inp = document.querySelector('#inp').value
    let inp2 = document.querySelector('#inp2').value
    let inp3 = document.querySelector('#inp3').value

    let dados = {
        id_prod: Number(inp),
        id_venda: Number(inp2),
        quantidade: Number(inp3)
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    };

    fetch('http://localhost:3000/detalhes', options)
        .then(res => {
            if (res.status === 200) {
                alert('ok')
                window.location.reload()
            }
        })
        .then(response => window.location.reload())
        .catch(err => console.error(err));
}