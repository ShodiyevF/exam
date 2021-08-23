const validation = require('../lib/validation.js')
const { readJson } = require('../lib/orm.js')

module.exports = function tets (req, res, next) {
    try {
        let { username, password, birth, email, gender } = req.body
        if (!username || !validation.username(username)) throw 'The username is required!'
        if (!password || !validation.password(password)) throw 'The password is required!'
        if (!birth || !validation.birth(birth)) throw 'The birth is required!'
        if (!email || !validation.email(email)) throw 'The email is required!'
        if (!gender || !validation.gender(gender)) throw 'The gender is required!'


        let users = readJson('users')

        console.log(users);
        let user = users.find(user => user.username == username)
        if (user) throw 'The user already exists!'

        next()
    } catch (error) {
        res.status(401).json({ status: 401, message: error })
    }
}