"use strict";
//unknown/Tuple/Enum
//unknown à peu prêt comme any mais ne peut être utilisé avant d'être précisé
function a(arg) {
    if (arg instanceof HTMLInputElement) { // réduit le type
        arg.value = "Hello";
    }
}
const b = true; //litéral (reconnait le type sans précisé)
const c = { isPrivate: true, isPublic: false }; // deux manière de forcer true ou false on ne peut plus les modifiés
const d = { isPrivate: true, isPublic: false }; // une autre façon de figé les valeurs  (différent du const JS , ne peut plus être changer)
const e = [1, 2, 3];
//Tuple fait la distinction entre un tableau qui a une taille défini et fixe
const f = ["tomate", 2]; //forcement de taille deux avec string et number
const g = ["tomate", 12];
const h = ["aubergine", 6];
function merge(a, b) {
    return [...a, ...b];
}
const i = merge(g, h);
//Enum sauvegarde des états données et donner des noms
var STEPS;
(function (STEPS) {
    STEPS[STEPS["Intro"] = 0] = "Intro";
    STEPS[STEPS["Selection"] = 1] = "Selection";
    STEPS[STEPS["Panier"] = 2] = "Panier";
    STEPS[STEPS["Paiement"] = 3] = "Paiement";
})(STEPS || (STEPS = {}));
var STEPS1;
(function (STEPS1) {
    STEPS1["Intro"] = "Intro";
    STEPS1["Selection"] = "Selection";
    STEPS1["Panier"] = "Panier";
    STEPS1["Paiement"] = "Paiement";
})(STEPS1 || (STEPS1 = {}));
const step = STEPS.Selection;
const step1 = STEPS1.Selection;
console.log(STEPS[step]);
console.log(step);
console.log(step1);
const step2 = "Intro" /* STEPS2.Intro */;
//avantage : proposition fait à JS qui sera peut-être supporter directement par JS dans le futur; plus court à écrire que les types
