const { readJson } = require("../../lib/orm")

const getCategories = () => {
    
    const categoriesData = readJson('categories')
    const subcategoriesData = readJson('subcategories')
    const productsData = readJson('products')
    
    let global = []
    let testa = []
    
    
    const test = categoriesData.forEach(element => {
        
        let array = subcategoriesData.filter(el => el.category_id == element.category_id)

        console.log(array);
        
        let cat
        for (const i of array) {
            let sub
            sub = {
                subCategoryId: i.sub_category_id,
                subCategoryName: i.sub_category_name,
            }
            testa.push(sub)
        }        

        cat = {
            categoryId: element.category_id,
            categoryName: element.category_name,
            subCategories: testa
        }
        
        global.push(cat)
    });

    return global
}

getCategories()

module.exports = {
    getCategories
}