const button = document.getElementById('button')

button.addEventListener('click', () => {
    let xhr
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject('Microsoft.XMLHTTP')

    xhr.open('get', 'https://jsonplaceholder.typicode.com/users')

    xhr.addEventListener('load', (data) => {
        // console.log(typeof data.target.response)
        const dataJSON = JSON.parse(data.target.response)

        const list = document.getElementById('list')
        for(const userInfo of dataJSON) {
            const listItem = document.createElement('li')
            listItem.textContent = `${userInfo.id}: ${userInfo.name}`
            list.appendChild(listItem)
        }
    })

    xhr.send()
}) 