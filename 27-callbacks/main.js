/* 
    Callback:
    Es una funcion que se ejecuta a través de otra función.
    Los callbacks no son asíncronos.
*/

const getUser = (id, cb) => {
    const user = {
        name: 'Mia',
        id:id
    }
    
    if(id == 2) cb('User not exist')
    else cb(null, user)
}

getUser(1, (err, user) => {
    if(err) return console.log(err)
    console.log(`User name is ${user.name}`)
})

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

const getUsers = (id, cb) => {
    const user = users.find(user => user.id == id)
    if(!user) cb(`Not exist a user with id ${id}`)
    else cb(null, user)
}

const getEmail = (user, cb) => {
    const email = emails.find(email => email.id == user.id)
    if(!email) cb(`${user.name} hasn't email`)
    else cb(null, {
        id: user.id,
        name: user.name,
        email: email.email
    })
}

getUsers(3, (err, user) => {
    if(err) return console.log(err)

    getEmail(user, (err, res) => {
        if(err) return console.log(err)
        console.log(res)
    })
})