const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')



router.get('/', productsController.index)

router.get('/detail/:id', productsController.detail)

router.get('/edit/:id', productsController.edit)

router.put('/edit/:id', productsController.update)

module.exports = router