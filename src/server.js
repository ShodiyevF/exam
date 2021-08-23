const express = require('express')
const auth = require('./modules/auth/index')
const CATEGORIES = require('./modules/categories/index.js')
const SUBCATEGORIES = require('./modules/subcategories/index.js')

const app = express()

app.use(express.json())
app.use(auth)
app.use(CATEGORIES)
app.use(SUBCATEGORIES)

app.listen('4000')