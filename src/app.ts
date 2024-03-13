//Alias
type User = {firstname: string, lastname: string}
type DateString = string
type Id = string | number
type Identity<ArgType> = (arg: ArgType) => ArgType
type Username = User['firstname']

//Extraire un type à partir d'une constante (pas trop utilisé)
const user1 = {
    firstname: 'John',
    lastname: 'Doe',
    age: 32
}
type User1 = typeof user1

const user: User = {firstname: "John", lastname: "Doe"}

function identity<ArgType>(arg: ArgType): ArgType { //choisir le type de arg une fois et le retour doit être du même type
    return arg
}
const a = identity<number>(3)
const b = identity(3) //comprend que c'est un nombre même si on ne met pas number

function first<Type>(arg: Type[]): Type {
    return arg[0]
}

const aa = first(["aze", "bze", 3])
const ab: Array<string | number> = ["aze", "bze", 3]

const compteur = document.querySelector<HTMLButtonElement>('#compteur')

//l'argument doit obligatoirement avoir un attribut length (les nombres ne marchent pas)
function consoleSize<Type extends {length: number}>(arg: Type): Type {
    console.log(arg.length)
    return arg
}
const abb = consoleSize(['3', 2])