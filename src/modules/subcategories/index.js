const express = require('express')
const { SUBCATEGORIES } = require('./ctrl')
const router = express.Router()

router.route('/subcategories')
    .get(SUBCATEGORIES)

module.exports = router