function carregar() {
    const options = { method: 'GET' };

    fetch('http://localhost:3000/getAlocacao', options)
        .then(response => response.json())
        .then(response => {
            response.forEach(element => {
                const options2 = { method: 'GET' };

                fetch('http://localhost:3000/getAutomoveis', options2)
                    .then(response => response.json())
                    .then(res => {
                        res.forEach(resCarro => {

                            let area1 = document.querySelector('.div1')
                            let area2 = document.querySelector('.div2')
                            let area3 = document.querySelector('.div3')
                            let area4 = document.querySelector('.div4')
                            let area5 = document.querySelector('.div5')
                            let area6 = document.querySelector('.div6')
                            let area7 = document.querySelector('.div7')
                            let area8 = document.querySelector('.div8')
                            let area9 = document.querySelector('.div9')
                            let area10 = document.querySelector('.div10')
                            let area11 = document.querySelector('.div11')

                            if (element.area == area1.innerHTML) {
                                if (element.area !== null) {
                                    area1.classList.add('temCarro')
                                    if (resCarro.id == element.automovel) {
                                        document.querySelector('.nomeCarro').innerHTML = resCarro.modelo
                                    }
                                }
                            }
                            if (element.area == area2.innerHTML) {
                                if (element.area !== null) {
                                    area2.classList.add('temCarro')
                                    if (resCarro.id == element.automovel) {
                                        document.querySelector('.nomeCarro').innerHTML = resCarro.modelo
                                    }
                                }
                            }
                            if (element.area == area3.innerHTML) {
                                if (element.area !== null) {
                                    area3.classList.add('temCarro')
                                    if (resCarro.id == element.automovel) {
                                        document.querySelector('.nomeCarro').innerHTML = resCarro.modelo
                                    }
                                }
                            }
                            if (element.area == area4.innerHTML) {
                                if (element.area !== null) {
                                    area4.classList.add('temCarro')
                                    if (resCarro.id == element.automovel) {
                                        document.querySelector('.nomeCarro').innerHTML = resCarro.modelo
                                    }
                                }
                            }
                            if (element.area == area5.innerHTML) {
                                if (element.area !== null) {
                                    area5.classList.add('temCarro')
                                    if (resCarro.id == element.automovel) {
                                        document.querySelector('.nomeCarro').innerHTML = resCarro.modelo
                                    }
                                }
                            }
                            if (element.area == area6.innerHTML) {
                                if (element.area !== null) {
                                    area6.classList.add('temCarro')
                                    if (resCarro.id == element.automovel) {
                                        document.querySelector('.nomeCarro').innerHTML = resCarro.modelo
                                    }
                                }
                            }
                            if (element.area == area7.innerHTML) {
                                if (element.area !== null) {
                                    area7.classList.add('temCarro')
                                    if (resCarro.id == element.automovel) {
                                        document.querySelector('.nomeCarro').innerHTML = resCarro.modelo
                                    }
                                }
                            }
                            if (element.area == area8.innerHTML) {
                                if (element.area !== null) {
                                    area8.classList.add('temCarro')
                                    if (resCarro.id == element.automovel) {
                                        document.querySelector('.nomeCarro').innerHTML = resCarro.modelo
                                    }
                                }
                            }
                            if (element.area == area9.innerHTML) {
                                if (element.area !== null) {
                                    area9.classList.add('temCarro')
                                    if (resCarro.id == element.automovel) {
                                        document.querySelector('.nomeCarro').innerHTML = resCarro.modelo
                                    }
                                }
                            }
                            if (element.area == area10.innerHTML) {
                                if (element.area !== null) {
                                    area10.classList.add('temCarro')
                                    if (resCarro.id == element.automovel) {
                                        document.querySelector('.nomeCarro').innerHTML = resCarro.modelo
                                    }
                                }
                            }
                            if (element.area == area11.innerHTML) {
                                if (element.area !== null) {
                                    area11.classList.add('temCarro')
                                    if (resCarro.id == element.automovel) {
                                        document.querySelector('.nomeCarro').innerHTML = resCarro.modelo
                                    }
                                }
                            }
                        })
                    })
                    .catch(err => console.error(err));
            });
        })
        .catch(err => console.error(err));
}

function abrirModal1() {
    let modalAparecer = document.querySelector(".modal1");
    modalAparecer.classList.remove("model")
}

function fecharModal1() {
    let modalAparecer = document.querySelector(".modal1");
    modalAparecer.classList.add("model")
}