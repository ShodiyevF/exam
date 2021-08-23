const validation = require('../lib/validation.js')
const {readJson} = require('../lib/orm.js')

module.exports = function (req, res, next) {
    try {
        let { username, password } = req.body
        if (!username || !validation.username(username)) throw 'The username is required!'
        if (!password || !validation.password(password)) throw 'The password is required!'

        let users = readJson('users')
        let user = users.find(user => user.username == username && user.password == password)
        if (!user) throw 'Wrong password or username!'

        req.user = user
        next()
    } catch (error) {
        res.status(401).json({ status: 401, message: error })
    }
}