const { Router } = require('express')
const ProductController = require('./controllers/ProductController')
const CartController = require('./controllers/CartController')

const routes = Router()

routes.get('/products', ProductController.index)

routes.post('/product', ProductController.store)

routes.get('/carts', CartController.index)

routes.post('/carts', CartController.store)

module.exports = routes