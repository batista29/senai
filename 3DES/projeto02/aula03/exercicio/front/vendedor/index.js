const main = document.querySelector('.main')
const exe = document.querySelector('.lista')

function carregar() {
    const options = {
        method: 'GET'
    };

    fetch('http://localhost:3000/vendedor', options)
        .then(response => response.json())
        .then(res => {
            res.forEach(e => {

                let tabela = exe.cloneNode(true)
                tabela.classList.remove("model")
                tabela.querySelector('#nome').innerHTML = 'Vendedor: ' + e.nome
                tabela.querySelector('#salario').innerHTML = 'Sálario: ' + e.salario
                tabela.querySelector('#setor').innerHTML = 'Quantidade: ' + e.Setor.nome

                main.appendChild(tabela)
            });
        })
}

function enviar() {
    let inp = document.querySelector('#inp').value
    let inp2 = document.querySelector('#inp2').value
    let inp3 = document.querySelector('#inp3').value

    let dados = {
        nome: inp,
        salario: Number(inp2),
        setorId: Number(inp3)
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    };

    fetch('http://localhost:3000/vendedor', options)
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

    let id_busca = document.querySelector('#id_busca').value

    const options = { method: 'GET' };

    fetch(`http://localhost:3000/vendedor/${id_busca}`, options)
        .then(response => response.json())
        .then(res => {

            document.querySelector('#nomeBusca').innerHTML = 'nome: ' + res.nome
            document.querySelector('#salarioBusca').innerHTML = 'Salario: ' + res.salario
            document.querySelector('#setorBusca').innerHTML = 'Setor: ' + res.Setor.nome

        })
}