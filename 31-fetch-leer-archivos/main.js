/*
    Fetch API
        blob():
            > Binary Long Object
            > Al indicar la ruta al archivo:
            > Podemos leer ese archivo y renderizarlo en pantalla
        URL:
            > Con el objeto URL usando el método createObjectURL(archivo)
            > Podemos crear una ruta válida para ver ese archivo
*/

const buttonImg = document.getElementById('buttonImg')
const buttonPdf = document.getElementById('buttonPdf')

buttonImg.addEventListener('click', () => {
    fetch('dog.jpg')
        .then(res => res.blob())
        .then(img => {
            document.getElementById('img').src = URL.createObjectURL(img)
        })
})

buttonPdf.addEventListener('click', () => {
    fetch('demo.pdf')
        .then(res => res.blob())
        .then(pdf => {
            document.getElementById('pdf').href = URL.createObjectURL(pdf)
        })
})