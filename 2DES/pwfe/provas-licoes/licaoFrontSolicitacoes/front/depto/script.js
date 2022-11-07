var modelo = document.querySelector(".modelo");

function carregar() {
    fetch('http://localhost:3000/departamento/readAll')
        .then(response => response.json())
        .then((dados) => {

            dados.forEach((dado) => {

                let infos = modelo.cloneNode(true);
                infos.classList.remove('modelo')

                console.log(dado)
                infos.querySelector("#nome_depto").innerHTML = dado.Nome_Depto
                infos.querySelector("#cod_depto").innerHTML = dado.Cod_Depto

                document.querySelector('table').appendChild(infos);
            });
        })
}

function excluir() {
    let inp_cod = document.querySelector("#inp_cod").value

    const options = {
        method: 'DELETE'
    };

    console.log(inp_cod)
    fetch(`http://localhost:3000/departamento/del/${inp_cod}`, options)
        .then(response => response.status)
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