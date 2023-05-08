// questão 12

function inicio() {
    let i
    let j
    let copia
    let troca = 0
    let tam = 10
    let vet = [55, 35, 10, 68, 99, 31, 60, 19, 10, 05]
    do {
        troca = 0
        for (let i = 0; i < tam; i++) {
            if (vet[i] < vet[i + 1]) {
                copia = vet[i]
                vet[i] = vet[i + 1]
                vet[i + 1] = copia
                troca = 1
            }
        }
    } while (troca == 1);
    console.log("\n\n")
    for (let i = 0; i < tam; i++) {
        console.log(vet[i], ",")
    }
}

console.log(inicio())

// questao 20

function inicio2() {
    let parametro = 6
    console.log("Resultado " + func1(parametro))

    function func1(numero) {
        if (numero == 0) {
            return 1
        } else if (numero < 0) {
            return -1
        } else {
            return numero * func1(numero - 1)
        }
    }
}

console.log(inicio2())


//questao 22

function inicio3() {
    var cont
    var n
    var ant
    var atual


    cont = 1
    if (cont == 1) {
        n = 1
        ant = 1
        atual = 1
        console.log(ant)
    } else {
        n = ant + atual
        ant = atual
        atual = n
    }
    console.log(n)
    cont = cont + 1
    return cont > 5
}

console.log(inicio3())

// quetao 28
// var a, b, c, d

// function inicio4() {
//     a = 10
//     b = 0
//     c = a
//     d = 4
// }