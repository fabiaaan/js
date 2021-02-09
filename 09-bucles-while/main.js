let password = 'Hello'

while(password != 'Hello'){
    password = prompt('Ingresa tu contraseña')
}

console.log('Ingreso correctamente con while')

let passwordTwo = 'Hello'

do{
    passwordTwo = prompt('Ingresa tu contraseña')
    console.log('¡Incorrecto!')
} while((passwordTwo != 'Hello'))

console.log('Ingreso correctamente con do while')