const { getCategories, getSubcategories } = require("./model")

const SUBCATEGORIES = (req, res) => {
    try {

        res.send(getSubcategories())

    } catch (error) {

    }
}

module.exports = {
    SUBCATEGORIES
}