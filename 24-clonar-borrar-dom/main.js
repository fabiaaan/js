const title = document.getElementById('title')
const list = document.getElementById('list')

const newElement = document.createElement('li')
newElement.textContent = 'New element'

// Clonar elementos con hijos
list.after(list.cloneNode(true))


// Clonar elementos sin hijos
list.after(list.cloneNode(false))

// Eliminar el nodo del DOM
list.remove()

// Eliminar el nodo hijo
list.removeChild(list.children[0])