fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
        return response.json();
    })

    .then((data) => {
        data.forEach(info => {

            let aux1 = document.createElement("h2");
            let aux3 = document.createElement("input")
            aux3.type = "checkbox";
            aux3.checked = info.completed;
            aux3.info = aux3.completed;

            aux1.innerHTML = info.userId + " - " + info.title;

            document.querySelector("body").appendChild(aux1)
            document.querySelector("body").appendChild(aux3)
        });
    })