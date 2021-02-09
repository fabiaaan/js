for (let i = 1; i <= 5; i++){
    console.log(i)
}

let vowels = ['a', 'e', 'i', 'o', 'u']

for(let i = 0; i < vowels.length; i++){
    console.log(vowels[i])
}

let names = ['Paco', 'José', 'Paula', 'María']

for(let name of names){
    if(name === 'Paula'){
        break
    }
    console.log(name)
}

for(let index in names){
    if(index === '2'){
        continue
    }
    console.log(index)
}