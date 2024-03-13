"use strict";
//Extraire un type à partir d'une constante (pas trop utilisé)
const user1 = {
    firstname: 'John',
    lastname: 'Doe',
    age: 32
};
const user = { firstname: "John", lastname: "Doe" };
function identity(arg) {
    return arg;
}
const a = identity(3);
const b = identity(3); //comprend que c'est un nombre même si on ne met pas number
function first(arg) {
    return arg[0];
}
const aa = first(["aze", "bze", 3]);
const ab = ["aze", "bze", 3];
const compteur = document.querySelector('#compteur');
//l'argument doit obligatoirement avoir un attribut length (les nombres ne marchent pas)
function consoleSize(arg) {
    console.log(arg.length);
    return arg;
}
const abb = consoleSize(['3', 2]);
