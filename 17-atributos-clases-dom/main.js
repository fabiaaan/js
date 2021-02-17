const title = document.getElementById('title')
const name = document.getElementById('name')

// Atributos
console.log(name.getAttribute('type'))
name.setAttribute('type', 'number')
console.log(name)

// Clases
title.classList.add('main-title')
title.classList.remove('main-title')

if(title.classList.contains('title')) console.log('El título tiene la clase title')
else console.log('El título NO tiene la clase title')

title.classList.replace('title', 'main-title')

console.log(title.innerHTML)
console.log(title.textContent)

console.log(title)
console.log(name)
