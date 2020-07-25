const { Router } = require('express')
const ProductController = require('./controllers/ProductController')
const CartController = require('./controllers/CartController')

const routes = Router()

routes.get('/products', ProductController.index)

routes.get('/products/:id', ProductController.indexById)

routes.post('/product', ProductController.store)

routes.delete('/cart/:id', CartController.delete)

routes.patch('/cart/:id', CartController.update)

routes.get('/carts', CartController.index)

routes.post('/carts', CartController.store)

module.exports = routes