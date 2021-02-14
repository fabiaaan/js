const numbers = [1, 2, 3, 4]
console.log(...numbers)

const addNumbers = (a, b, c) => {
    console.log(a + b + c)
}

// Añadir arrays a funciones
let numbersToAdd = [5, 6, 7]
addNumbers(...numbersToAdd)

// Añadir array a otro array
let users = ['Pablo', 'Maria', 'Mia']
let newUsers = ['Sebas', 'Lau']
users.push(...newUsers)
console.log(users)

// Copiar arrays
let arrOne = [1, 2, 3]
let arrTwo = [...arrOne]
console.log(arrTwo)

// Concatenar arrays
let arrConcatenar = arrOne.concat(arrTwo)
console.log(arrConcatenar)
let arrConcatenarTwo = [...arrOne,...arrTwo]
console.log(arrConcatenarTwo)

// Enviar un número indefinido de argumentos a una función
const rest = (...num) => {
    console.log(num)
}
rest(9, 8, 7, 6)

// Librería math
console.log(Math.max(10, 20, 30))
console.log(Math.max(...numbers))
console.log(Math.min(...numbers))

// Eliminar elementos duplicados
let dup = [90, 80, 90, 100, 80]
console.log([...new Set(dup)])