var usuario = [
    {
        "nome": "ronaldo",
        "senha": "12345"
    },
    {
        "nome": "vitor",
        "senha": "67890"
    }
    ,
    {
        "nome": "vitor",
        "senha": "92384"
    }
]

var btnLogin = document.querySelector("#btnLogin");
var inpUser = document.querySelector("#inpuser");
var inpSenha = document.querySelector("#inpsenha");

btnLogin.addEventListener("click", () => {
    let resposta = validaLogin(inpUser.value, inpSenha.value);
    window.location.href = resposta;
})

function validaLogin() {
    let aux = false;
    usuario.forEach(info => {

        if ((info.nome == inpUser.value) && (info.senha == inpSenha.value)) {
            aux = true;
        } 
    });
    if (aux == false) {
        alert("USUÁRIO OU SENHA INCORRETAS");
    }else{
        alert("INFORMAÇÕES CORRETAS")
        return "menu.html";
    }
}