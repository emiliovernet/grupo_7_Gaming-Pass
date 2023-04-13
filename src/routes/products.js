const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController.js')
const adminMiddleware = require('../Middlewares/admin.js')
const userNotLogged = require('../Middlewares/userNotLogged.js')


// Productos
router.post('/productForm', productsController.new);
router.put('/:id', productsController.update); 
router.get('/:id/edit',userNotLogged,adminMiddleware, productsController.edit); 
router.delete('/:id',userNotLogged,adminMiddleware, productsController.destroy); 
router.get('/', productsController.home);
router.get('/detail/:id/', productsController.productDetail);
router.get('/productCart' , productsController.productCart);
router.get('/create',adminMiddleware, productsController.productCreate);

module.exports = router;

