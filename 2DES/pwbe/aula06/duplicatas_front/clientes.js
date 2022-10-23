var modelo = document.querySelector(".modelo");
var tell = document.querySelector(".telefones");

fetch('http://localhost:3000/duplicatas/clientes')
    .then(response => response.json())
    .then((dados) => {

        dados.forEach((dado) => {

            let infos = modelo.cloneNode(true);

            infos.classList.remove('modelo')
            infos.querySelector(".cod_cli").innerHTML = dado.cod_cli
            infos.querySelector(".nome").innerHTML = dado.nome
            infos.querySelector(".endereco").innerHTML = dado.endereco
            infos.querySelector(".bairro").innerHTML = dado.bairro
            infos.querySelector(".cidade").innerHTML = dado.cidade
            infos.querySelector(".uf").innerHTML = dado.uf
            infos.querySelector(".telefones").innerHTML = `<button class="close" onClick="showModal(${dado.cod_cli})"><img src="https://www.araraquara.sp.gov.br/governo/secretarias/educacao/telefone.png/@@images/6538313b-a791-4d85-8b04-4296183afcf7.png" height="25px" width="25px"></button>`

            document.querySelector('table').appendChild(infos);
        });
    })

function showModal(id) {

    fetch('http://localhost:3000/duplicatas/clientes')
        .then(response => response.json())
        .then((data) => {

            data.forEach((dado) => {

                if (dado.cod_cli == id) {

                    document.querySelector(".tels").innerHTML = ""

                    dado.telefones.forEach((tel) => {

                        document.querySelector(".tels").innerHTML += `${tel.numero} \r\n`
                    })
                }
            });
        })
}