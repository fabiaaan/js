/*
    Una promesa:
    Es un objeto con 2 callbacks internos
*/
const users = [
    {
        id: 1,
        name: 'Rob'
    },
    {
        id: 2,
        name: 'Lau'
    },
    {
        id: 3,
        name: 'Mia'
    }
]

const emails = [
    {
        id: 1,
        email: 'rob@gmail.com'
    },
    {
        id: 2,
        email: 'lau@gmail.com'
    }
]

const getUsers = (id) => {
    const user = users.find(user => user.id == id)
    return promise = new Promise((resolve, reject) => {
        if(!user) reject(`Not exist a user with id ${id}`)
        else resolve(user)
    })
}

const getEmail = (user) => {
    const email = emails.find(email => email.id == user.id)
    return promise = new Promise((resolve, reject) => {
        if(!email) reject(`${user.name} hasn't email`)
        else resolve({
            id: user.id,
            name: user.name,
            email: email.email
        })
    })
}

/*
getUsers(3)
    .then(user => getEmail(user))
    .then(res => console.log(res))
    .catch(err => console.log(err))
*/
getUsers(1)
    .then(getEmail)
    .then(console.log)
    .catch(console.log)
