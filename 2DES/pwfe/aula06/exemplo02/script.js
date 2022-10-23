var carrinho = [
    {
        "img" : "https://bestchineseproducts.com/wp-content/uploads/2019/07/Nike-Walking-shoes.png",
        "nome" : "Tênis Naique Eir Jordão",
        "qntd" :2
    },
    {
        "img" : "https://img.ifunny.co/images/53e408fa3628e6509c9f51de01fa11c16f43f4167b7beece03b6bf35eea9206f_1.jpg",
        "nome" : "Chinelo Ardidas",
        "qntd" :1
    },
    {
        "img":"https://ae01.alicdn.com/kf/HTB13IDMKh1YBuNjy1zcq6zNcXXaY/Shorts-dos-homens-bermuda-2018-ver-o-praia-shorts-homem-pumba-carta-impress-o-masculina-marca.jpg_Q90.jpg_.webp",
        "nome":"Bermuda Pulma",
        "qntd":3
    },
    {
        "img":"https://i.pinimg.com/736x/62/43/a6/6243a68ce7276a7a199e1cf48331d6d8.jpg",
        "nome":"Camisa Lacosta",
        "qntd":5
    }
];

var itemCarrinho = document.querySelector(".item-carrinho");

function carregar() {
    carrinho.forEach(item =>{
        let novoItem = itemCarrinho.cloneNode(true);

        novoItem.classList.remove("modelo");

        novoItem.querySelector("#img-item").src = item.img;
        novoItem.querySelector("#nome-item").innerHTML = item.nome;
        novoItem.querySelector("#qntd-item").value = item.qntd;

        document.querySelector(".carrinho").appendChild(novoItem);
    });
}

function removerItem(e){
    e.parentNode.remove();
}
