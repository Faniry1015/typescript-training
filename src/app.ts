//Readonly
function reverse<T>(arr: readonly T[]): T[] { //la propriété en entrée ne doit pas être modifiée, on doit créer un nouvel objet
    return [...arr].reverse()
}

//Classes
class A {
    private a = 3 //ne peut être accéder qu'à l'intérieur de la classe et dans la méthode de la classe
    protected b = 2 // presque comme private sauf que les enfants peuvent y accéder
    public c = 1 // par défaut, n'a pas besoin d'être déclaré

    log() {
        console.log(this.a)
    }
}

class B extends A {
    logb() {
        console.log(this.b)
    }
}

const aInstance = new A()
aInstance.log()

const bInstance = new B()
bInstance.logb()
  