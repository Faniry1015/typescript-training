//unknown/Tuple/Enum

//unknown à peu prêt comme any mais ne peut être utilisé avant d'être précisé
function a(arg: unknown) {
   if (arg instanceof HTMLInputElement) { // réduit le type
      arg.value = "Hello"
   }
}

const b = true //litéral (reconnait le type sans précisé)

const c = {isPrivate: true as true, isPublic: false as const} // deux manière de forcer true ou false on ne peut plus les modifiés
const d = {isPrivate: true, isPublic: false} as const // une autre façon de figé les valeurs  (différent du const JS , ne peut plus être changer)
const e = [1,2,3] as const 

//Tuple fait la distinction entre un tableau qui a une taille défini et fixe
const f: [string, number] = ["tomate", 2] //forcement de taille deux avec string et number

type ListItem = [string, number]
const g: ListItem = ["tomate", 12]
const h: ListItem = ["aubergine", 6]
function merge<T extends unknown[], U extends unknown[]>(a: T, b:U): [...T, ...U] {
   return [...a, ...b]
}
const i = merge(g, h)


//Enum sauvegarde des états données et donner des noms
enum STEPS {
   Intro,
   Selection,
   Panier,
   Paiement
}
enum STEPS1 {
   Intro = "Intro",
   Selection = "Selection",
   Panier = "Panier",
   Paiement = "Paiement"
}

const step: STEPS =  STEPS.Selection
const step1: STEPS1 =  STEPS1.Selection
console.log(STEPS[step])
console.log(step)
console.log(step1)

//on ajoutant const Donnera directement la valeur dans le app.js compiler
const enum STEPS2 {
   Intro = "Intro",
   Selection = "Selection",
   Panier = "Panier",
   Paiement = "Paiement"
}

const step2: STEPS2 = STEPS2.Intro

//avantage : proposition fait à JS qui sera peut-être supporter directement par JS dans le futur; plus court à écrire que les types


   
