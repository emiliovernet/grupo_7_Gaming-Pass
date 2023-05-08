const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController.js')
const adminMiddleware = require('../Middlewares/admin.js')
const userNotLogged = require('../Middlewares/userNotLogged.js')
const multerProducts = require('../Middlewares/multerProducts.js')
const validationProducts = require('../Middlewares/validationProducts.js')


// Productos
router.get('/', productsController.home);
router.get('/detail/:id/', productsController.productDetail);
router.get('/:id/edit',userNotLogged, productsController.edit); // adminMiddleware,
router.get('/productCart' , productsController.productCart);
router.get('/create', productsController.productCreate);
router.post('/productForm', multerProducts.single("image"),validationProducts, productsController.new);
router.put('/:id', productsController.update); 
router.delete('/:id',userNotLogged, productsController.destroy); 

module.exports = router;

