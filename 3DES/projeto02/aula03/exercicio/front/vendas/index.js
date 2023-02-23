const main = document.querySelector('.main')
const exe = document.querySelector('.lista')

function carregar() {
    const options = {
        method: 'GET'
    };

    fetch('http://localhost:3000/vendas', options)
        .then(response => response.json())
        .then(res => {
            res.forEach(e => {
                var date = new Date(e.data)
                var dataFormatadata = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

                let tabela = exe.cloneNode(true)
                tabela.classList.remove("model")

                tabela.querySelector('#data').innerHTML = 'Data: ' + dataFormatadata
                tabela.querySelector('#vendedor').innerHTML = 'Vendedor: ' + e.Vendedor.nome

                e.Detalhe.forEach(dados => {
                    tabela.querySelector('#quantidade_prod').innerHTML = 'Quantidade: ' + dados.quantidade
                    tabela.querySelector('#nome_prod').innerHTML = 'Produto: ' + dados.Produto.nome
                    tabela.querySelector('#valor').innerHTML = 'Valor: ' + dados.Produto.valor
                })
                main.appendChild(tabela)
            });
        })
}

function buscar() {
    const pricipal = document.querySelector('.buscar')
    const info = document.querySelector('.infos')

    let id_busca = document.querySelector('#id_busca').value

    const options = { method: 'GET' };

    fetch(`http://localhost:3000/vendas/${id_busca}`, options)
        .then(response => response.json())
        .then(res => {
            document.querySelector('#dataBusca').innerHTML = 'Data: ' + res.data
            document.querySelector('#vendedorBusca').innerHTML = 'Vendedor (%): ' + res.Vendedor.nome

            res.Detalhe.forEach(dados => {
                let infoGrid = info.cloneNode(true)
                infoGrid.classList.remove("model")
                infoGrid.querySelector('#nome_prodBusca').innerHTML = 'Quantidade: ' + dados.quantidade
                infoGrid.querySelector('#quantidade_prodBusca').innerHTML = 'Produto: ' + dados.Produto.nome
                infoGrid.querySelector('#valorBusca').innerHTML = 'Valor: ' + dados.Produto.valor
                pricipal.appendChild(infoGrid)
            })
        })
}

function enviar() {
    let inp = document.querySelector('#inp').value

    let dados = {
        vendedorId: Number(inp),
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    };

    fetch('http://localhost:3000/vendas', options)
        .then(res => {
            if (res.status === 200) {
                alert('ok')
                window.location.reload()
            }
        })
        .then(response => window.location.reload())
        .catch(err => console.error(err));
}