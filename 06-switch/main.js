let number = 2

switch(number){
    case 1:
        console.log('El número es 1')
        break
    case 2:
        console.log('El número es 2')
        break
    default:
        console.log('El número no es 1 o 2')
}

switch(number){
    case 1:
    case 3:
    case 5:
        console.log('El número es impar')
        break
    case 2:
    case 4:
        console.log('El numero es par')
}