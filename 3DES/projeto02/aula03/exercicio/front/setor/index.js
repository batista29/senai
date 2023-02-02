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
                tabela.querySelector('#comissao').innerHTML = 'Comissão: ' + e.comissao
                e.produtos.forEach(dados => {
                    tabela.querySelector('#nome_prod').innerHTML = 'Produto: ' + dados.nome
                    tabela.querySelector('#valor').innerHTML = 'Valor: ' + dados.valor
                })

                main.appendChild(tabela)
            });
        })
}