function carregar() {
    const options = { method: 'GET' };

    fetch('http://localhost:5000/clientes', options)
        .then(response => response.json())
        .then(response => {
            response.forEach(e => {

                data = new Date(e.nascimento);
                dataFormatada = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

                const corpo = document.querySelector("#corpo");
                let card = document.querySelector(".card").cloneNode(true);
                card.classList.remove('model');
                card.querySelector("#nome").innerHTML += e.nome;
                card.querySelector("#login").innerHTML += e.login;
                card.querySelector("#nascimento").innerHTML += dataFormatada;
                card.querySelector("#telefone").innerHTML += e.telefone;
                console.log(e.avatar)
                // card.querySelector("#img").src = montaImg(e.avatar);
                corpo.appendChild(card);
            })

        })
        .catch(err => console.error(err));
}

// function montaImg(img) {
//     if (img != null) {
//         return `data:image/png;base64,${img}`;
//     } else
//         return `./default.png`;
// }


// function cadastrar() {
//     const options = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: 'false'
//     };

//     fetch('http://localhost:5000/clientes', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
// }

// function deletar() {
//     const options = {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//         body: '{"login":"adrianalemos"}'
//     };

//     fetch('http://localhost:5000/clientes', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
// }