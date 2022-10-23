//tagname , id, class
// var texto = document.getElementsByTagName("h1");

//console.log(texto);

// var titulo = document.getElementById("titulo");

//var aluno = {
//    nome: "Fulano",
//    matricula: 234578
// };

// titulo.innerHTML = `Nome : ${aluno.nome} </br> Matricula : ${aluno.matricula}`;

//titulo.style.color = "blue";
//titulo.style.margin = "200px";

//var mensagem = document.getElementById("mensagem");

//mensagem.style.display = "block";

//var divisao = document.getElementsByClassName("divisao");

//document.querySelector();
//document.querySelectorAll();

//var titulo2 = document.querySelector("#titulo");
//var div = document.querySelectorAll(".divisao");
//var msg = document.querySelector("h1");

var busca = document.querySelector("#busca");

var linhas = document.querySelectorAll("tr");

var btBusca = document.querySelector("button");

btBusca.addEventListener("click", buscarNome);

busca.addEventListener("keyup",buscarNome);

function buscarNome(){

    console.log(busca.value);

    let encontrei = false;

    linhas.forEach((linha) => {
        let temp = linha.querySelector("td");
        if(temp != null){
        //    if(temp.innerHTML.toLocaleLowerCase() == busca.value.toLocaleLowerCase()){
        //        alert("encontrei");
        //        encontrei = true;
        //        linha.style.fontWheight = "bold";
        //        linha.style.color = "pink";
        //         }
    //       if(temp.innerHTML.toLocaleLowerCase().includes(busca.value.toLocaleLowerCase())){
    //            linha.style.display = "table-row";
    //     }else{
    //         linha.style.display = "none";
    //     }
    // }
    

    if(linha.innerHTML.toLowerCase().includes(busca.value.toLowerCase())){
linha.style.display = "table-row";
    }else{
        linha.style.display = "none";
    }
    }
});

   // if(!encontrei) alert("Não encontrei");

}

// let v1 = 1;
// let v2 = "1";

// if(v1 !== v2){
// console.log("NãO SOMOS IGUAIS");
// }

// var teste = document.getElementsByClassName("teste")
// //get é como fosse um localizador do elemento que queremos manipular
// console.log(teste)
// teste[0].innerHTML = "tabelinha"