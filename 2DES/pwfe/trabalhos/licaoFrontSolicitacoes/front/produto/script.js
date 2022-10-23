var modelo = document.querySelector(".modelo");

function carregar() {
    fetch('http://localhost:3000/produto/read')
        .then(response => response.json())
        .then((dados) => {

            dados.forEach((dado) => {

                let infos = modelo.cloneNode(true);
                infos.classList.remove('modelo')

                console.log(dado)
                infos.querySelector("#cod_prod").innerHTML = dado.Cod_Produto
                infos.querySelector("#nome_prod").innerHTML = dado.Nome_produto

                document.querySelector('table').appendChild(infos);
            });
        })
}

function cadastrar() {

    let corpo = {
        "cod_produto": document.querySelector("#Cod_Produto").value,
        "nome_produto": document.querySelector("#Nome_produto").value,
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };

    options.body = JSON.stringify(corpo);

    fetch('http://localhost:3000/produto/create', options)
        .then(response => response.json())
        .then(resp => {
            if (resp == 201) {
                localStorage.setItem('sucesso.');
                window.location.reload();
            } else {
                localStorage.setItem('erro');
                window.location.reload();
            }
        })
        .catch(err => (err));
        window.location.reload();
}