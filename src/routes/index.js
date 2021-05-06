const { Router } = require('express');

const UserController = require('../controllers/UserController')
const LoginController = require('../controllers/LoginController')
const ProductsController = require('../controllers/ProductsController')
const CartController = require('../controllers/CartController')

const routes = Router()

routes.get('/', (req,res) =>{
    res.send('Olá Mundo')
})

routes.post('/users', UserController.createUse)
routes.get('/users', UserController.getUser)
routes.get('/users/:user_id', UserController.getUserById)

routes.post('/login', LoginController.createSession)

routes.post('/products/:user_id', ProductsController.createProduct)
routes.get('/products/:user_id', ProductsController.getUserProducts)
routes.patch('/products/:user_id/:product_id', ProductsController.updateProducts)
routes.delete('/products/:user_id/:product_id', ProductsController.deleteProducts)

routes.get('/products', ProductsController.getAll)
routes.get('/products/:product_id', ProductsController.getProductById)

routes.post('/cart/:user_id', CartController.createCart)
routes.get('/cart/:user_id', CartController.getUserCart)

routes.get('/cart/:user_id/:cart_id', CartController.getCart)




module.exports = routes