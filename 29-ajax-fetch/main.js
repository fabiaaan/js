/*
    Fetch API
    > Permite acceder y manipular partes del canal HTTP, como peticiones y respuestas
    > Provee un método global fetch()
        > Proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red
        > Basado en promesas, por lo cual tiene un response y un reject internos
    Response tiene varios métodos
        array​Buffer():
            > Archivos binarios en bruto (mp3, pdf, jpg, etc)
            > Se utiliza cuando se necesita manipular el contenido del archivo
        blob():
            > Archivos binarios en bruto (mp3, pdf, jpg, etc)
            > Se utiliza cuando no se necesita manipular el contenido
            > Y se va a trabajar con el archivo directamente
        clone():
            > Crea un clon de un objeto de respuesta
            > Idéntico en todos los sentidos
            > Almacenado en una variable diferente
        form​Data():
            > Se utiliza para leer los objetos formData
        json():
            > Convierte los archivos json en un objeto de JavaScript
        text():
            > Se utiliza cuando queremos leer un archivo de texto
            > Siempre se codifica en UTF-8
*/
const button = document.getElementById('button')

button.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        const list = document.getElementById('list')
        const fragment = document.createDocumentFragment()
        for(const userInfo of res) {
            const listItem = document.createElement('li')
            listItem.textContent = `${userInfo.id}: ${userInfo.name}`
            fragment.appendChild(listItem)
        }
        list.appendChild(fragment)
    })
})