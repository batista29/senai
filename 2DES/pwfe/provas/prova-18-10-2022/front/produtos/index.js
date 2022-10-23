function carregar() {
    const options = { method: 'GET' };

    fetch('https://patrimoniomongo.herokuapp.com/read/', options)
        .then(response => response.json())
        .then(response => {
            response.items.forEach(e => {
                let card = document.querySelector(".card").cloneNode(true);
                card.classList.remove('model');
                card.querySelector("#id").innerHTML += e.id;
                card.querySelector("#ni").innerHTML += e.ni;
                card.querySelector("#aquisicao").innerHTML += e.aquisicao;
                card.querySelector("#denominacao").innerHTML += e.denominacao;
                card.querySelector("#valor").innerHTML += e.valor;
                card.querySelector("#img").src = './assets/' + e.img;
                corpo.appendChild(card);
            })
            
        })
        .catch(err => console.error(err));
}

function adicionar(){
    card.classList.remove('model');
}