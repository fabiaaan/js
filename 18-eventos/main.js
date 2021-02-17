const button = document.getElementById('button')
const box = document.getElementById('box')
const input = document.getElementById('input')


button.addEventListener('click', () => {
    console.log('Has hecho click')
} )

box.addEventListener('mouseenter', () => {
    box.classList.add('green')
})

box.addEventListener('mouseleave', () => {
    box.classList.replace('green', 'red')
})

box.addEventListener('mousedown', () => {
    console.log('Has pulsado en la caja')
})

box.addEventListener('mouseup', () => {
    console.log('Has soltado el botón de la caja')
})

box.addEventListener('mousemove', () => {
    console.log('Estas moviendo el ratón en la caja')
})

input.addEventListener('keydown', () => {
    console.log('Has pulsado una tecla')
})

input.addEventListener('keyup', () => {
    console.log('Has soltado una tecla')
})

input.addEventListener('keypress', () => {
    console.log('Estas pulsando una tecla')
})
