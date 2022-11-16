var emailEnter = document.querySelector("#email");
var pin = document.querySelector("#pin");

function cadastro() {
    let info = {
        "usuario": emailEnter.value,
        "senha": pin.value
    }

    console.log(info)
    fetch("http://10.87.207.2:3000/login", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(info)
    })
        .then(res => { return res.json() })
        .then(data => {
            if (data.erro === undefined) {
                localStorage.setItem("info", JSON.stringify({ "usuario": data.usuario }));
                 window.location.href = "../home/index.html";
            }
        })
}