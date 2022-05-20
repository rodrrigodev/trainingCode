const readDatabase = require('../src/utils/readDatabase')
const products = readDatabase('products')
const formatPrice = require('../src/utils/formatPrice')
const edit = require('../src/utils/edit')
const fs = require('fs')
const path = require('path')

const productsController = {
    index: (req, res)=>{
        res.render('products', {products, formatPrice})
    },
    detail: (req, res)=>{
        const {id} = req.params
        const productFound = products.find(product=> product.id === Number(id))

        res.render('detail', {productFound, formatPrice})
    },
    
    edit: (req, res)=>{
        const {id} = req.params
        const productFound = products.find((product=>{ return product.id === Number(id)}))
        res.render('product-edit-form', {productFound})
    },
    update: (req, res)=>{
        const {id} = req.params
        const productFound = products.find((product=>{ return product.id === Number(id)}))
        const {name, price, discount, category, description} = req.body

        const edited = {
            id: productFound.id,
            name: name,
            price: price,
            discount: discount,
            category: category,
            description: description,
            image: productFound.image
        }

        // edit(productFound, products, edited)
        const productsWithEdited = [...products, edited]
        const productsJSON = JSON.stringify(productsWithEdited, null, ' ')
        const pathProducts = path.join(__dirname, '..', 'src', 'database', 'products.json')
        fs.writeFileSync(pathProducts, productsJSON)
        res.send('Deu certo')
    }
    }





module.exports = productsController