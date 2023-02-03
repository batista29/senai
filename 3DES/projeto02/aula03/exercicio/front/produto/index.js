const main = document.querySelector('.main')
const exe = document.querySelector('.lista')

function carregar() {
    const options = {
        method: 'GET'
    };

    fetch('http://localhost:3000/produto', options)
        .then(response => response.json())
        .then(res => {
            res.forEach(e => {
                console.log(e)
                let tabela = exe.cloneNode(true)
                tabela.classList.remove("model")
                tabela.querySelector('#nome_prod').innerHTML = 'Prod: ' + e.nome
                tabela.querySelector('#valor').innerHTML = 'Valor: ' + e.valor
                main.appendChild(tabela)
            });
        })
}