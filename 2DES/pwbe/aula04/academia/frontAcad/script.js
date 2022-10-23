var infoLista = document.querySelector("#infoLista");

fetch("http://localhost:5000/academia")
    .then((res) => {
        return res.json();
    })

    .then((data) => {
        data.forEach(infos => {
            let novoUser = infoLista.cloneNode(true);
            novoUser.classList.remove("modelo")

            novoUser.querySelector("#idAluno").innerHTML = infos.id_aluno;
            novoUser.querySelector("#nome").innerHTML = infos.nome;
            novoUser.querySelector("#nasc").innerHTML = infos.nascimento;
            novoUser.querySelector("#sexo").innerHTML = infos.sexo;
            novoUser.querySelector("#peso").innerHTML = infos.peso;
            novoUser.querySelector("#nmr").innerHTML = infos.numero;

            document.querySelector(".main").appendChild(novoUser);
        });
    })