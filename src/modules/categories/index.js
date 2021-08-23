const express = require('express')
const { CATEGORIES, POSTCATEGORIES} = require('./ctrl')
const router = express.Router()

router.route('/categories')
    .get(CATEGORIES)
    .post(POSTCATEGORIES)


module.exports = router