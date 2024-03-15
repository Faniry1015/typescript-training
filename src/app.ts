//Readonly
function reverse<T>(arr: readonly T[]): T[] { //la propriété en entrée ne doit pas être modifiée, on doit créer un nouvel objet
    return [...arr].reverse()
}

//Classes
class A {
    
}