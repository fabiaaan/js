const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect')

const itemList = document.createElement('li')
itemList.textContent = 'Lunes'
daysList.appendChild(itemList)

// Crear fragmento de código
const fragment = document.createDocumentFragment()

for(const day of days){
    const itemList = document.createElement('li')
    itemList.textContent = day
    fragment.appendChild(itemList)
}
daysList.appendChild(fragment)

for(const option of days){
    const selectItem = document.createElement('option')
    selectItem.setAttribute('value', option.toLocaleLowerCase())
    selectItem.textContent = option
    fragment.appendChild(selectItem)
}
selectDays.appendChild(fragment)