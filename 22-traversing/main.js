const parent = document.getElementById('parent')
/*
    NOTA: Los nodos de tipo Document y DocumentFragment nunca van
    a tener un elemento padre, parentNode devolverá siempre null.
*/
console.log(document.parentNode)

// Nodo padre
console.log(parent.parentNode)
console.log(parent.parentElement)
console.log(parent.parentElement.parentElement.parentElement)

// Retorna todos los nodos hijos
console.log(parent.childNodes)

// Retorna todos los nodos elementos hijos
console.log(parent.children)

// Retorna el primer nodo hijo
console.log(parent.firstChild)

// Retorna el primer nodo elemento hijo
console.log(parent.firstElementChild)

// Retorna el último nodo hijo
console.log(parent.lastChild)

// Retorna el último nodo elemento hijo
console.log(parent.lastElementChild)

// Retorna true o false si el nodo tiene hijos
console.log(parent.hasChildNodes())

// Retorna el siguiente nodo hermano
console.log(parent.nextSibling)

// Retorna el siguiente nodo elemento hermano
console.log(parent.parentElement.nextElementSibling)

// Retorna el nodo hermano previo
console.log(parent.previousSibling)

// Retorna el nodo elemento hermano previo
console.log(parent.parentElement.previousElementSibling)