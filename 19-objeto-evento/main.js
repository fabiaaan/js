const form = document.getElementById('form')
const input = document.getElementById('input')

input.addEventListener('keyup', (e) => {
    console.log(e.key)
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

addEventListener('click', (e) => {
    console.log(e)
})