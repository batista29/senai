const uri = 'http://localhost:3000/patrimonio/itens/';
const corpo = document.querySelector("#corpo");
var itens = [];

var modal = document.querySelector('.modal')

function carregar() {
    const options = { method: 'GET' };

    fetch(uri, options)
        .then(res => res.json())
        .then(res => {
            itens = res;
            preencherTela();
        })
        .catch(err => console.error(err));
}

function preencherTela() {
    itens.forEach(e => {
        let card = document.querySelector(".card").cloneNode(true);
        card.classList.remove('model');
        card.querySelector("#ni").innerHTML += e.ni;
        card.querySelector("#aquisicao").innerHTML += e.aquisicao;
        card.querySelector("#denominacao").innerHTML += e.denominacao;
        card.querySelector("#valor").innerHTML += e.valor;
        card.querySelector("#img").src = '../docs/assets/' + e.img;
        card.querySelector("#del").setAttribute('onClick', `del(${e.ni})`)
        corpo.appendChild(card);
    })
}

function del(ni) {
    const options = {
        method: 'DELETE'
    };
    if (confirm("Confirma a exclusão do item" + ni)) {
        fetch(uri + ni, options)
            .then(res => res.status)
            .then(res => {
                window.location.reload()
            })
            .catch(err => console.error(err));
    }
}

function confirmarCadastro(){
    
    let body = {
        "ni": document.getElementById("inpNi").value,
        "aquisicao": document.getElementById("inpAquisicao").value,
        "denominacao": document.getElementById("inpDenominacao").value,
        "valor": document.getElementById("inpValor").value,
        "img": document.getElementById("inpImg").value
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    options.body = JSON.stringify(body);
    
        fetch(uri, options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 201) {
                    alert("Cliente cadastrado com sucesso");
                    window.location.reload();
                } else {
                    alert("Erro ao enviar dados.");
                    window.location.reload();
                }
            })
            .catch(err => alert("Erro ao enviar dados. Erro:" + err));
}

function adicionar(){
    modal[1].classList.remove('model');
}

function fecharModal(){
    modal[1].classList.add('model');
}