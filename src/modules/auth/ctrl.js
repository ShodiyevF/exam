const jwt = require("../../lib/jwt");
const { REGISTER, LOGIN } = require("./model")

const REGISTERctrl = (req, res) => {
    try {

        REGISTER(req.body)
        res.status(200).json( {
            status: 200,
            massage: 'user created',
            token: jwt.sign({ userId: req.body.user_id})
        } )
        
    } catch (error) {
        console.log(error);
    }
}

const LOGINctrl = (req, res) => {
    try {

        LOGIN(req.body)
        res.status(200).json({
            status: 200,
            massage: 'user logined',
            token: jwt.sign({ userId: req.body.user_id })
        })

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    REGISTERctrl,
    LOGINctrl
}