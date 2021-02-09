let number = 4;

(number % 2 == 0) ?
    console.log(`${number} es par`) :
    console.log(`${number} es impar`);

(number % 2 == 0) ?
    (console.log(`${number} es par`),
    console.log(`Y múltiplo de 2`)) :
    console.log(`${number} es impar`)