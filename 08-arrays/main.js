let numbers = [1, 2, 3, 4, 5]
let words = ['Learning', 'JavaScript']

console.log(numbers[3])
console.log(numbers)
console.log(numbers[0] + numbers[2])

console.log(`La palabra "${words[0]}" tiene ${words[0].length} letras`)

console.log(numbers.length)

let name = 4
// Evaluar si es un array
console.log(Array.isArray(numbers))

// Elimina el primer elemento del array
console.log(numbers)
numbers.shift()
console.log(numbers)

// Elimina el último elemento del array
numbers.pop()
console.log(numbers)

// Añadir un elemento al final del array
numbers.push(6)
console.log(numbers)

// Añadir un elemento al comienzo del array
numbers.unshift(0)
console.log(numbers)

// Retorna el primer índice del elemento que coincida con el valor especificado
console.log(numbers.indexOf(2))

// Retorna el último índice del elemento que coincida con el valor especificado
console.log(numbers.lastIndexOf(4))

// Invierte el orden de los elementos
numbers.reverse()
console.log(numbers)

// Retorna un string con el separador que le indicamos
console.log(numbers.join('-'))

/*
    .splice(a, b, items)
    a > índice de inicio
    b > número de elementos
    items > elementos a añadir (opcional)
*/
numbers.splice(4)
console.log(numbers)
numbers.splice(1, 2)
console.log(numbers)
numbers.splice(1, 1, 10, 20, 30)
console.log(numbers)

/*
    .slice(a, b)
    Extrae un array desde el índice a hasta el índice b.
*/
let arrayOne = numbers.slice(1)
console.log(arrayOne)
let arrayTwo = numbers.slice(2, 3)
console.log(arrayTwo)