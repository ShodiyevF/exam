const { getCategories} = require("./model")

const CATEGORIES = (req, res) => {
    try {

        res.send(getCategories())
        
    } catch (error) {
        
    }
}

module.exports = {
    CATEGORIES
}