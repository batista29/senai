function carregar() {
    const options = { method: 'GET' };

    fetch('http://10.87.207.2:3000/salgados', options)
        .then(response => response.json())
        .then(response => {
            response.forEach(e => {
                let card = document.querySelector(".card").cloneNode(true);
                card.classList.remove('model');
                card.querySelector("#id").innerHTML += e.id;
                card.querySelector("#nome").innerHTML += e.nome;
                card.querySelector("#descricao").innerHTML += e.descricao;
                card.querySelector("#img").src = '../assets/' + e.foto;

                corpo.appendChild(card);
            })

        })
        .catch(err => console.error(err));
}

function deletar() {
    let id = document.querySelector("#idDeletar");

    const options = { 
        method: 'DELETE' 
    };
    fetch("http://10.87.207.2:3000/salgado/" + id.value, options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 204)
            alert("Apagado")
                window.location.reload();
        })
        .catch(err => console.error(err));
}