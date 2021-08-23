const { readJson, writeJson } = require("../../lib/orm")

const REGISTER = ( {username, password, email, birth, gender} ) => {

    const users = readJson('users')
    const userId = users.length ? users[users.length - 1].user_id + 1 : 1
    const newUser = { user_id: userId, username , password, email, birth, gender}
    users.push(newUser)
    writeJson('users', users)
    
}

const LOGIN = ({username, password }) => {

    const data = readJson('users')

    const newUser = {
        username,
        password
    }

    const userUsername = data.find(user => user.username === newUser.username)
    const userPassword = data.find(user => user.password === newUser.password)

}

module.exports = {
    REGISTER,
    LOGIN
}