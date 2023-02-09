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
                let tabela = exe.cloneNode(true)
                tabela.classList.remove("model")
                tabela.querySelector('#nome_prod').innerHTML = 'Prod: ' + e.nome
                tabela.querySelector('#valor').innerHTML = 'Valor: ' + e.valor
                tabela.querySelector('#setor').innerHTML = 'Setor: ' + e.Setor.nome

                main.appendChild(tabela)
            });
        })
}

function enviar() {
    let inpNome = document.querySelector("#nome").value
    let inpValor = document.querySelector("#valor_prod").value
    let inpIdSetor = document.querySelector("#setorId").value

    let dados = {
        nome: inpNome,
        valor: Number(inpValor),
        setorId: Number(inpIdSetor)
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    };

    fetch('http://localhost:3000/produto', options)
        .then(res => {
            if (res.status === 200) {
                alert('ok')
                window.location.reload()
            }
        })
        .then(response => console.log(response))
        .catch(err => console.error(err));

}

function burcarProd() {
    let id_busca = document.querySelector("#id_busca").value

    const options = { method: 'GET' };

    fetch(`http://localhost:3000/produto/${id_busca}`, options)
        .then(res => res.json())
        .then(response => {
            console.log(response)
            document.querySelector("#nome_busca").innerHTML = response.nome
            document.querySelector("#valor_busca").innerHTML = response.valor
            document.querySelector("#setor_busca").innerHTML = response.Setor.nome
        })
        .catch(err => console.error(err));
}