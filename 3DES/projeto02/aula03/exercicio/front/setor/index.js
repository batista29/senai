const main = document.querySelector('.main')
const exe = document.querySelector('.lista')

function carregar() {
    const options = {
        method: 'GET'
    };

    fetch('http://localhost:3000/setor', options)
        .then(response => response.json())
        .then(res => {
            res.forEach(e => {
                let tabela = exe.cloneNode(true)
                tabela.classList.remove("model")

                tabela.querySelector('#setor').innerHTML = 'Setor: ' + e.nome
                tabela.querySelector('#comissao').innerHTML = 'Comissão (%): ' + e.comissao
                
                e.produtos.forEach(dados => {
                    tabela.querySelector('#nome_prod').innerHTML = 'Produto: ' + dados.nome
                    tabela.querySelector('#valor').innerHTML = 'Valor: ' + dados.valor
                    tabela.querySelector('#comissaoTotal').innerHTML = 'Comissão: ' + dados.valor * (e.comissao / 100)
                })
                main.appendChild(tabela)
            });
        })
}

function enviar() {
    let inp1 = document.querySelector('#inp1').value
    let inp2 = document.querySelector('#inp2').value

    let dados = {
        nome: inp1,
        comissao: Number(inp2)
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    };

    fetch('http://localhost:3000/setor', options)
        .then(res => {
            if (res.status === 200) {
                alert('ok')
                window.location.reload()
            }
        })
        .then(response => window.location.reload())
        .catch(err => console.error(err));
}

function buscar() {
    const pricipal = document.querySelector('.buscar')
    const info = document.querySelector('.infos')

    let id_busca = document.querySelector('#id_busca').value

    const options = { method: 'GET' };

    fetch(`http://localhost:3000/setor/${id_busca}`, options)
        .then(response => response.json())
        .then(response => {
            document.querySelector('#nome_busca').innerHTML = response.nome
            document.querySelector('#comissao_busca').innerHTML = response.comissao

            response.produtos.forEach(e => {
                let gridInfo = info.cloneNode(true)
                gridInfo.classList.remove("model")
                gridInfo.querySelector('#nome_prod_busca').innerHTML = e.nome
                gridInfo.querySelector('#valor_busca').innerHTML = e.valor
                pricipal.appendChild(gridInfo)
            })
        })
}