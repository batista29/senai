function cadastro() {

    const body = {
        "nome": document.querySelector("#nome").value,
        "descricao": document.querySelector("#descricao").value,
        "foto": document.querySelector("#nomeFoto").value
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };

    options.body = JSON.stringify(body);

    fetch("http://10.87.207.2:3000/salgado", options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 200) {
                alert("sucesso");
                window.location.href = "../home/index.html";
            } else {
                alert("Erro" + resp);
            }
        })
        .catch(err => {
            alert("Erro ao enviar dados, Erro:" + err);
        });
}