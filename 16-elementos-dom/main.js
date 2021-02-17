// Chrome: console.dir($0)
const title = document.getElementById('title')
console.log(title)
title.textContent = 'Accediendo a nodos en el DOM'

const paragraph = document.querySelector('.paragraph')
console.log(paragraph)

// Acceder a un elemento dentro de otro
const span = paragraph.querySelector('span')
console.log(span.textContent)

const spanTwo = document.querySelector('.paragraph').querySelector('span')
console.log(spanTwo.textContent)

// Acceder a todos los elementos con el mismo selector css
const paragraphs = document.querySelectorAll('.paragraph')
const paragraphsSpread = [...document.querySelectorAll('.paragraph')]
const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'))

console.log(paragraphs)
console.log(paragraphsSpread)
console.log(paragraphsArray)

paragraphs[0].style.color = 'blue'
paragraphsArray.map(p => p.style.color = 'green')
