let number = 5
let numberTwo = 6

if (number > 4) console.log(`${number} es mayor que 4`)

if (number > 10){
    console.log(`${number} es mayor que 10`)
} else {
    console.log(`${number} es menor que 10`)
}

if (number > 5){
    console.log(`${number} es mayor que 5`)
} else if (number < 5){
    console.log(`${number} es menor que 5`)
} else {
    console.log(`${number} es igual a 5`)
}

if (number > 0 && numberTwo > 0){
    console.log(`${number} y ${numberTwo} son mayores que 0`)
}

if (number > 5 || numberTwo > 5){
    console.log(`${number} o ${numberTwo} es mayor que 5`)
}

if (number > 4){
    if (numberTwo > 4){
        console.log(`${number} y ${numberTwo} son mayores que 4`)
    }
}

let word = 'Hello'

if (word.length > 5){
    console.log(`${word} tiene más de 4 letras`)
} else if (word.length < 5){
    console.log(`${word} tiene menos de 4 letras`)
} else {
    console.log(`${word} tiene 5 letras`)
}

let res = true

if(true) console.log('La respuesta es true')
if(!true) console.log('La respuesta es false')

// Ordenar 3 números
// Posibilidades: 3! = 3 * 2 * 1 = 6

let numbers = document.getElementById('numbers')
const results = document.getElementById('results')

let a = Number(prompt('Introduce el primer número'))
let b = Number(prompt('Introduce el segundo número'))
let c = Number(prompt('Introduce el tercer número'))

numbers.textContent = `Los números ingresados son: ${a}, ${b} y ${c}`

if (a >= b && a >= c){
    if(b > c){
        results.textContent = `El orden es: ${a}, ${b} y ${c}`
    } else {
        results.textContent = `El orden es: ${a}, ${c} y ${b}`
    }
} else if (b >= a && b >= c){
    if(a > c){
        results.textContent = `El orden es: ${b}, ${a} y ${c}`
    } else {
        results.textContent = `El orden es: ${b}, ${c} y ${a}`
    }
} else if (c >= a && c >= b){
    if(a > b){
        results.textContent = `El orden es: ${c}, ${a} y ${b}`
    } else {
        results.textContent = `El orden es: ${c}, ${b} y ${a}`
    }
}
