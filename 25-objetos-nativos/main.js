const button = document.getElementById('button')

/*
    Objeto window: Objeto global, de él descienden todos los objetos
    alert(), promt(), confirm()
*/
addEventListener('click', (e) => {
    console.log(e)
})

/*
    Objeto console: Contiene la consola del navegador
    console. => log(), dir(), error(), table()
*/
const person = {
    name: 'Mia',
    age: 30,
    email: 'mia@gmail.com'
}
console.log(button)
console.table(person)

/*
    Objeto location: Contiene barra de direcciones
    location. => href, protocol, host, pathname, hash, reload()
*/
console.log(location.href)
console.log(location.protocol)
console.log(location.host)
console.log(location.pathname)
console.log(location.hash)

/*
    Objeto history: Historial de una página en una sesión
    history. => back(), forward(), go(n | -n), length
*/
console.log(history.length)

/*
    Objeto date: Empieza a contar desde 0 los días y meses
*/
const date = new Date()
console.log(date.getDay())
console.log(date.getDate())
console.log(date)
console.log(date.toUTCString())

// Timers
button.addEventListener('click', () => {
    setTimeout(saludar, 3000)
})

const saludar = () => {
    console.log('Hola')
}

const timeOut = setTimeout(() => {
    console.log('Adiós')
}, 3000)

button.addEventListener('click', () => {
    clearTimeout(timeOut)
})

let cont = 0
const interval = setInterval(() => {
    console.log(cont)
    cont++
}, 3000)

button.addEventListener('click', () => {
    clearInterval(interval)
})

