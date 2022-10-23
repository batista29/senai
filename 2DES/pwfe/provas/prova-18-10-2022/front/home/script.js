const corpo = document.querySelector("#header");

function carregar() {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{"username":"admin","password":"admin", "img":"avatar.png"}'
};

fetch('https://patrimoniomongo.herokuapp.com/login', options)
    .then(response => response.json())
    .then(response => {
        console.log(response.img)
        
          let card = document.querySelector(".card").cloneNode(true);
          card.classList.remove('model');
          card.querySelector("#img").src = '../home/assets/' + response.img;
          corpo.appendChild(card);
    })
    .catch(err => console.error(err));
}