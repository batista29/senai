var nome = document.querySelector("#inpNome");
var email = document.querySelector("#inpEmail");
var senha1 = document.querySelector("#inpSenha1");
var senha2 = document.querySelector("#inpSenha2");
var telefone = document.querySelector("#inpTell");
var CEP = document.querySelector("#inpCep");

var logra = document.querySelector("#logradouro");
var complemento = document.querySelector("#complemento");
var bairro = document.querySelector("#bairro");
var cidade = document.querySelector("#cidade");
var estado = document.querySelector("#estado");

var auxSenha = false;

function mandar() {

    fetch("https://viacep.com.br/ws/"+CEP.value+"/json/")
    .then((response)=>{return response.json()})
    .then((info)=>{
        
        // validarSenha
    if (senha1.value == senha2.value) {
        auxSenha = true;
    }
    if (auxSenha == true) {
        alert("SENHA CERTA");
    } else {
        alert("SENHA ERRADA");
    }

    logra.value = info.logradouro;
    bairro.value = info.bairro;
    cidade.value = info.localidade;
    estado.value = info.uf;

    })
}