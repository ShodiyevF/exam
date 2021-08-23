const express = require('express')
const registerValidation = require('../../middlewares/registerValidation')
const loginValidation = require('../../middlewares/loginValidation')
const { REGISTERctrl, LOGINctrl } = require('./ctrl')

const router = express.Router()

router.route('/register')
    .post( registerValidation, REGISTERctrl)

router.route('/login')
    .post( loginValidation ,LOGINctrl)

module.exports = router