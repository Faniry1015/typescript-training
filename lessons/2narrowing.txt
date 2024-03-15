//narrowing : permet à typescript d'être capable d'éliminer des cas et de réduire les types possibles pour les variables
function printId(id: string | number) {
    if (typeof id === "number") {
       console.log((id * 3).toString());
    } else {
       //Il sait exactement que id est du string
       console.log(id.toUpperCase());
    }
 }
 function example(a: string | boolean, b: string | number) {
    if (a === b) {
       a;
    }
 }
 function example2(a: string | Date) {
    if (a instanceof Date) {
       a;
    }
 }
 
 function example3(a: MouseEvent | HTMLInputElement) {
    if ("value" in a) {
       a;
    }
    //type never pour les cas qui ne pourrons jamais apparaitre (très peu utiliser (jamais))
 }
 
 function isDate(a: any) : a is Date {
     return a instanceof Date
 }
 function example4(a: string | Date) {
     if (isDate(a)) {
        a;
     }
  }
 
  const compteur = document.querySelector("#compteur") as HTMLButtonElement;
  const compteur2 = document.querySelector("#compteur")! //pour dire que compteur2 doit obligatoirement existé (a éviter)
 
 let i = 0;
 const increment = (e: Event) => {
    i++;
    const span = compteur?.querySelector("span");
    if (span) {
       //c'est du narrowing : si la condition est rempli alors on ne peut pas être dans le type de span null ou undefined ; Il sait exactement que c'est du HTMLSpanElement (survoler span si dessous pour confirmer)
       span.innerText = i.toString();
    }
 };
 
 compteur?.addEventListener("click", increment);
 
 //On utilise souvent le narrowing pour éliminer la valeur null
 