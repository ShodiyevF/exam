const { readJson } = require("../../lib/orm")

const getSubcategories = () => {

    const categoriesData = readJson('categories')
    const subcategoriesData = readJson('subcategories')
    const productsData = readJson('products')

    let globala = []
    let proGlobal = []


    const test = subcategoriesData.forEach(element => {

        let array = productsData.filter(el => el.sub_category_id === element.sub_category_id)

        // console.log(array);

        let subCat

        for (const i of array) {
            // console.log(i);
            let pro
            pro = {
                productId: i.product_id,
                productName: i.product_name,
                model: i.product_model,
                price: i.product_price,
                color: i.product_color,
            }
            proGlobal.push(pro)
        }

        subCat = {
            subCategoryId: element.sub_category_id,
            subCategoryName: element.sub_category_name,
            products: proGlobal
        }

        globala.push(subCat)
    });

    return globala
}
getSubcategories()

module.exports = {
    getSubcategories
}