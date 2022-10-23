var id_prod = document.querySelector("#id_prod");
// var ni_prod = document.querySelector("#ni_prod");
// var aquisicao = document.querySelector("#aquisicao");
// var deniominacao = document.querySelector("#deniominacao");
// var valor = document.querySelector("#valor");
// var img = document.querySelector("#img")
var informacoes = document.querySelector("#informacoes");


function carregar() {
    fetch("https://patrimoniomongo.herokuapp.com/read/")
        .then(res => { return res.json() })
        .then(posts => {
            posts.forEach(info => {
                let lista = id_prod.cloneNode(true);
                lista.querySelector("#id_prod").innerHTML = info._id;
                informacoes.appendChild(lista);
            });
        })
}