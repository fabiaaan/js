const getName = async () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Mia')
        }, 1500)
    })
}

const sayHello = async () => {
    const name = await getName()
    return `Hello ${name}`
}

sayHello().then(res => console.log(res))

const users = [
    { id: 1, name: 'Rob'}, { id: 2, name: 'Lau'}, { id: 3, name: 'Mia'}
]

const emails = [
    { id: 1, email: 'rob@gmail.com'}, { id: 2, email: 'lau@gmail.com'}
]

const getUsers = async (id) => {
    const user = users.find(user => user.id == id)
    if(!user) throw new Error(`Not exist a user with id ${id}`)
    else return user
}

const getEmail = async (user) => {
    const email = emails.find(email => email.id == user.id)
    if(!email) throw new Error(`${user.name} hasn't email`)
    else return ({
        id: user.id,
        name: user.name,
        email: email.email
    })
}

const getInfo = async (id) => {
    try {
        const user = await getUsers(id)
        const res = await getEmail(user)
        return `${user.name} email is ${res.email}`
    } catch(err) {
        console.log(err)
    }
    
}

getInfo(3).then(res => console.log(res))
