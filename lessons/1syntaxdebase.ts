//Syntaxe de base
const a: string = "Hello world";
const n: number = 3;
const b: boolean = true;
const d: null = null;
const arr: string[] = ["aze", "aze"]; //Tableau de chaine de caractère
const arr2: any[] = ["aze", 3] //Tableau qui contiennent plusieurs types de valeurs
//Type Any pour dire n'importe quel type (à éviter au max)
//Typescript est capable de comprendre les types automatiquement quand on met directement une valeur (comme dans les const si dessus on peut enlever le typage)
const user: {
    [key: string]: string,
   firstname: string,
} = {
    "key": "key1",
   firstname: "John",
};
const date: Date = new Date()
const callBack: Function = (e: MouseEvent): void => {

}
const cb:(e: MouseEvent) => void = (e: MouseEvent): number => {
    return 3
}
// On peut spécifié les retours des fonctions : void pour dire ne retourne rien
function printId(id: number | string): void { //number ou string
    console.log(id.toString())
}

const compteur = document.querySelector("#compteur") as HTMLButtonElement
// alternative
const compteur2= <HTMLButtonElement>document.querySelector("#compteur")

let i = 0
const increment =(e: Event) =>{
    i++
    const span = compteur?.querySelector('span')
    if (span) {
        span.innerText = i.toString()
    }
}

compteur?.addEventListener('click', increment)