let word = 'Hello World'

console.log(word.length)

// Methods

console.log(word.toLocaleLowerCase())
console.log(word.toLocaleUpperCase())
console.log(word.indexOf('e'))
console.log(word.replace('World', 'Mia'))
console.log(word.substring(2))
console.log(word.substring(0, 5))
console.log(word.slice(2))
console.log(word.slice(-5))
console.log(word.slice(0, -6))

let wordTwo = '   Good morning guys   '

console.log(wordTwo.trim())

console.log(word.startsWith('H'))
console.log(word.startsWith('h'))
console.log(word.startsWith('W', 6))
console.log(word.endsWith('d'))
console.log(word.endsWith('o', 5))
console.log(word.endsWith('World'))

console.log(word.includes('b'))
console.log(word.includes('o', 5))

let wordThree = 'Hello'

console.log(wordThree.repeat(3))
console.log('br'.repeat(5))

// Templates Strings

let names = 'Mia'
let lastname = 'Zuck'

console.log('Hello '+ names +' '+ lastname)
console.log(`Hello ${names} ${lastname}`)