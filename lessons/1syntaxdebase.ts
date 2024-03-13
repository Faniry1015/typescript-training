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
function printId1(id: number | string): void { //number ou string
    console.log(id.toString())
}

const compteur3 = document.querySelector("#compteur") as HTMLButtonElement
// alternative
const compteur5= <HTMLButtonElement>document.querySelector("#compteur")

let i2 = 0
const increment6 =(e: Event) =>{
    i2++
    const span = compteur3?.querySelector('span')
    if (span) {
        span.innerText = i2.toString()
    }
}

compteur3?.addEventListener('click', increment6)