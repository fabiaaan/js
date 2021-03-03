 /*
    API webStorage:
        Los dos mecanismos en el almacenamiento web son los siguientes:
        > sessionStorage
            Mantiene un área de almacenamiento separada para cada origen
            que está disponible mientras dure la sesión de la página
            (mientras el navegador esté abierto, incluyendo recargas de
            página y restablecimientos).
        > localStorage
            Hace lo mismo, pero persiste incluso cuando el navegador se cierre
            y se reabra. Ambos funcionan con clave:valor y tienen dos métodos
            fundamentales:
            setItem()
                > Para asignar una clave:valor
            getItem()
                > Recibe como parámetro la clave de la que necesitamos obtener el valor
*/

const form = document.getElementById('form')
const keys = document.getElementById('keys')

form.addEventListener('submit', (e) => {
    e.preventDefault()
/*
    const person = {
        name: 'Sebas',
        emal: 'sebas@gmail.com'
    }
    sessionStorage.setItem('person', JSON.stringify(person))
    sessionStorage.setItem('name', 'John')
*/
    sessionStorage.setItem(form.key.value, form.value.value)
    keys.innerHTML += `<option>${form.key.value}</option>`
    form.reset()
})

keys.addEventListener('change', () => {
    document.getElementById('infoValue').textContent =
    sessionStorage.getItem(keys[keys.selectedIndex].textContent)
})

sessionStorage.clear()
sessionStorage.removeItem('name')