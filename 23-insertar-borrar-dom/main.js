const title = document.getElementById('title')
const list = document.getElementById('list')

const newElement = document.createElement('li')
newElement.textContent = 'New element'

// Insertar un elemento antes del elemento de referencia
list.insertBefore(newElement, list.children[0])

// Antes de que empiece (hermano anterior)
list.children[0].insertAdjacentElement('beforebegin', newElement)

// Después de que empiece (primer hijo)
list.insertAdjacentElement('afterbegin', newElement)

// Antes de que acabe (ultimo hijo)
list.insertAdjacentElement('beforeend', newElement)

// Después de que acabe(hermno siguiente)
list.children[0].insertAdjacentElement('afterend', newElement)

list.children[0].insertAdjacentHTML('afterend', '<li>Hello</li>')
list.children[0].insertAdjacentText('afterend', '<li>Hello</li>')

// Reemplaza un hijo por otro
list.replaceChild(newElement, list.children[0])

/*
    DOM manipulation convenience methods (actualidad)
*/

// Antes de que empiece (hermano anterior)
list.children[0].before(newElement)

// Después de que empiece (primer hijo)
list.prepend(newElement)

// Antes de que acabe (ultimo hijo)
list.append(newElement)

// Después de que acabe(hermno siguiente)
list.children[1].after(newElement)

// Reemplaza un hijo por otro
list.children[0].replaceWith(newElement)