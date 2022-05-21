const readDatabase = require('../src/utils/readDatabase')
const products = readDatabase('products')
const formatPrice = require('../src/utils/formatPrice')
const edit = require('../src/utils/edit')
const deleteProduct = require('../src/utils/deleteProduct')

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
        edit(products, edited)
        res.redirect('/products')
    },
    delete: (req, res)=>{
        const {id} = req.params
        deleteProduct(id, products)
        res.redirect('/products')
    },
    create: (req, res)=>{
        res.render('product-create-form')
    },
    save: (req, res)=>{
        
    }
    }

module.exports = productsController