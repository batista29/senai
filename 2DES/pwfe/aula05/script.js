function criarElemento() {
    let itemLista = document.createElement("div");
itemLista.className = "item-lista";

let thumbnail = document.createElement("img");
thumbnail.src = "https://www.portalcaparao.com.br/assets/galeriadefotos/20170702_105956/Sinuca%20Petrina2.jpg";
thumbnail.id = "thumb";
thumbnail.alt = "Foto do Restaurante";

let like = document.createElement("img");
like.src = "/assets/heart.png";
like.id = "like";
like.alt = "Icone de coracaozin";

let avaliacao = document.createElement("img");
avaliacao.src = "/assets/favourite.png";
avaliacao.id = "avaliacao";
avaliacao.alt = "Avaliacao";

let info = document.createElement("div");
info.id = "info";

let nomeRestaurante = document.createElement("P");
nomeRestaurante.innerHTML = "Xurumelas Bar 2.0 Muito mais melhor do que antes";

let textoAvaliacao = document.createElement("p");

textoAvaliacao.appendChild(avaliacao);
textoAvaliacao.append("4.9");

info.appendChild(nomeRestaurante);
info.appendChild(textoAvaliacao);

itemLista.appendChild(thumbnail);
itemLista.appendChild(info);
itemLista.appendChild(like);

document.querySelector(".lista").appendChild(itemLista);
}

