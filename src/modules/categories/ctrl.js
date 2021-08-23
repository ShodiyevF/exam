const { getCategories} = require("./model")

const CATEGORIES = (req, res) => {
    try {

        res.send(getCategories())
        
    } catch (error) {
        
    }
}

const POSTCATEGORIES = (req, res) => {
    try {
        postCategories(req.body)
        res.status(200).json({
            status: 200,
            message: 'post buldi'
        })

    } catch (error) {

    }
}

module.exports = {
    CATEGORIES,
    POSTCATEGORIES
}