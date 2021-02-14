function saludar(){
    console.log('Hola')
}
saludar()

const greet = () => console.log('Hello')
greet()

const greetUser = (user) => console.log(`Hi ${user}`)
greetUser('Mia')

const suma = (numeroUno, numeroDos) => {
    return numeroUno + numeroDos
}
console.log(suma(4, 3))
