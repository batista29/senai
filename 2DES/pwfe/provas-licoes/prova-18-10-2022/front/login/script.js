function entrar() {
    let email = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value;
    console.log(email)
    console.log(senha)

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: '{"username":"admin","password":"admin"}'
    };

    fetch('https://patrimoniomongo.herokuapp.com/login', options)
        .then(response => response.json())
        .then(response => {
            if (email == response.username && senha == response.password) {
                window.location.href = "../home/index.html"
            } else {
                alert("Senha errada")
            }
        })
        .catch(err => console.error(err));

}