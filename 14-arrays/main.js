let word = 'Hello world'
console.log(Array.from(word))
console.log(word.split(''))
console.log(word.split(' '))

const letters = ['b', 'z', 'a', 'p']
const numbers = [1, 8, 100, 300, 3]

// Ordenar
console.log(letters.sort())
console.log(numbers.sort())
console.log(numbers.sort((a, b) => a - b))
console.log(numbers.sort((a, b) => b - a))

// Comprobar
const words = ['HTML', 'CSS', 'JavaScript']
console.log(words.some(word => word.length > 2))
console.log(words.some(word => word.length > 10))
console.log(words.every(word => word.length > 3))

// Recorrer
numbers.forEach((number) => console.log(number))
numbers.forEach((number, index) => console.log(`${number} en posición ${index}`))

numbers.map(number => console.log(number * 2))

const res = numbers.filter(number => number > 40)
console.log(res)

console.log(numbers.reduce((a, b) => a + b))

const users = [
    {
        name: 'Juan',
        online: true
    },
    {
        name: 'Mia',
        online: false
    },
    {
        name: 'Sebas',
        online: true
    }
]

const usersOnline = users.reduce((conn, user) => {
    if(user.online) conn++
    return conn
}, 0)

console.log(`Hay ${usersOnline} usuarios conectados`)

