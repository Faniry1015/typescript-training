"use strict";
//Syntaxe de base
const a = "Hello world";
const n = 3;
const b = true;
const d = null;
const arr = ["aze", "aze"]; //Tableau de chaine de caractère
const arr2 = ["aze", 3]; //Tableau qui contiennent plusieurs types de valeurs
//Type Any pour dire n'importe quel type (à éviter au max)
//Typescript est capable de comprendre les types automatiquement quand on met directement une valeur (comme dans les const si dessus on peut enlever le typage)
const user = {
    "key": "key1",
    firstname: "John",
};
const date = new Date();
const callBack = (e) => {
};
const cb = (e) => {
    return 3;
};
// On peut spécifié les retours des fonctions : void pour dire ne retourne rien
function printId(id) {
    console.log(id.toString());
}
const compteur = document.querySelector("#compteur");
// alternative
const compteur2 = document.querySelector("#compteur");
let i = 0;
const increment = (e) => {
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
