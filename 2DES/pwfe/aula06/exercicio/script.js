//Apenas analistas e desenvolvedores podem possuir Admin os demais são apenas leitores;
//Apenas cargos de nível 3 ou superior podem ser Admin;
//Cargos inferiores a 3 podem ser removidos da lista de acesso;
var funcionario = [
	{
		"funcionario": "Sancho Cedraz",
		"cargo": {
			"nome": "Analista",
			"nível": 2
		},
		"autorizado": true
	},
	{
		"funcionario": "Ionara Pederneiras",
		"cargo": {
			"nome": "Técnico",
			"nível": 2
		},
		"autorizado": true
	},
	{
		"funcionario": "Filipe Castanho",
		"cargo": {
			"nome": "Desenvolvedor",
			"nível": 1
		},
		"autorizado": false
	},
	{
		"funcionario": "Lívia Bicalho",
		"cargo": {
			"nome": "Analista",
			"nível": 3
		},
		"autorizado": true
	},
	{
		"funcionario": "Mauro Varanda",
		"cargo": {
			"nome": "Desenvolvedor",
			"nível": 3
		},
		"autorizado": false
	},
	{
		"funcionario": "Sandro Rosário",
		"cargo": {
			"nome": "Técnico",
			"nível": 3
		},
		"autorizado": true
	}
]

var itemFuncoes = document.querySelector(".item-funcoes");

function carregar() {
	funcionario.forEach(item => {
		let novoItem = itemFuncoes.cloneNode(true);

		novoItem.classList.remove("modelo");

		novoItem.querySelector("#funcionario-item").innerHTML = item.funcionario;
		novoItem.querySelector("#cargo-item").innerHTML = item.cargo.nome;
		novoItem.querySelector("#nivel-item").innerHTML = item.cargo.nível;

		//desenvolvedores e analistas podem ser adm (level 3)
		if (item.cargo.nível >= 3 && (item.cargo.nome == "Analista" || item.cargo.nome == "Desenvolvedor")) {
				novoItem.querySelector("#autorizado-item").innerHTML = "ADM";
			} else {
				novoItem.querySelector("#autorizado-item").innerHTML = "LEITOR"
			}
		document.querySelector(".funcionario").appendChild(novoItem);
	});
}

function removerItem(e) {
	let test = e.parentNode
	let nivel = test.querySelector("#nivel-item")

	if (nivel.innerHTML >= 3) {
		alert("NÃO É POSSÍVEL REMOVER");
	} else {
		alert("REMOÇÃO AUTORIZADA");
		e.parentNode.remove();
	}
}