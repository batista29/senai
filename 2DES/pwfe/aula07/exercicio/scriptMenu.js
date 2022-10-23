var produto = [
    {
        "img":"https://imgnike-a.akamaihd.net/1300x1300/007144ID.jpg",
        "nome":"Camisa Nike",
        "preco" : "175,00"
    },
    { 
        "img":"https://images.tcdn.com.br/img/img_prod/690339/camiseta_nike_sb_logo_black_white_10551_1_2466e4c0d72ddbb4e3d2b8f3fb588215.jpeg",
        "nome":"Camisa Nike",
        "preco" : "150,00"
    },
    { 
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQhoSUJ-R61Pi_ZB4khFm1ALsd4tzBtPbSPA&usqp=CAU",
        "nome":"Camisa Nike",
        "preco" : "155,00"
    },
    { 
        "img":"https://assets.adidas.com/images/w_600,f_auto,q_auto/b2a0ccec4c0749faba76ada701161ba7_9366/Camiseta_adidas_SPRT_Collection_Branco_HE2078_01_laydown.jpg",
        "nome":"Camisa Adidas",
        "preco" : "110,00"
    },
    { 
        "img":"https://assets.adidas.com/images/w_600,f_auto,q_auto/c0b5234b4053469285dea83500d56eda_9366/Camiseta_3-Stripes_Branco_CW1203_01_laydown.jpg",
        "nome":"Camisa Adidas",
        "preco" : "120,00"
    },
    {
        "img":"https://assets.adidas.com/images/w_600,f_auto,q_auto/e82030cfc92047cd9bf6aac60162fae9_9366/Camiseta_adidas_PT3_Logo_Rosa_FM3695_01_laydown.jpg",
        "nome":"Camisa Adidas",
        "preco" : "100,00"
    }
];

var itemProduto = document.querySelector(".item-produto");

function carregar() { 
    produto.forEach(item => {
        let novoItem = itemProduto.cloneNode(true);

        novoItem.classList.remove("modelo");

        novoItem.querySelector("#img-item").src = item.img;
        novoItem.querySelector("#item-camisa").innerHTML = item.nome;
        novoItem.querySelector("#preco-camisa").innerHTML = item.preco;

        document.querySelector(".produto").appendChild(novoItem);
    });
}