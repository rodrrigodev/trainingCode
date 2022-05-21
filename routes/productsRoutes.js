const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')



router.get('/', productsController.index)

router.get('/detail/:id', productsController.detail)

router.get('/edit/:id', productsController.edit)

router.put('/edit/:id', productsController.update)

router.delete('/delete/:id', productsController.delete)

router.get('/create', productsController.create)

router.post('/', productsController.save)

module.exports = router