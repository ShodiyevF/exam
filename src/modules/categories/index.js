const express = require('express')
const { CATEGORIES} = require('./ctrl')
const router = express.Router()

router.route('/categories')
    .get(CATEGORIES)


module.exports = router