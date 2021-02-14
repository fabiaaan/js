class Persona{
    constructor(name, lastname, age){
        this.name = name,
        this.lastname = lastname,
        this.age = age
        this.data = `Me llamo ${name} ${lastname} y tengo ${age} años.`
    }

    greet(){
        return `Hola, me llamo ${this.name} y tengo ${this.age} años.`
    }
}

const mia = new Persona('Mia', 'Bent', 22)
const sebas = new Persona('Sebas', 'Bent', 27)

console.log(mia)
console.log(mia.greet())