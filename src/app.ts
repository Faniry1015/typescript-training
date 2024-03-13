const compteur = document.querySelector("#compteur");
let i = 0;

const increment = () => {
   i++
   compteur.querySelector('span').innerText= i.toString()
};

compteur.addEventListener("click", increment);
