const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController.js')
const adminMiddleware = require('../Middlewares/admin.js')
const userNotLogged = require('../Middlewares/userNotLogged.js')
const multerProducts = require('../Middlewares/multerProducts.js')
const validationProducts = require('../Middlewares/validationProducts.js')


// Productos
router.post('/productForm',validationProducts,multerProducts.single("image"), productsController.new);
router.put('/:id', productsController.update); 
router.get('/:id/edit',userNotLogged,adminMiddleware, productsController.edit); 
router.delete('/:id',userNotLogged, productsController.destroy); 
router.get('/', productsController.home);
router.get('/detail/:id/', productsController.productDetail);
router.get('/productCart' , productsController.productCart);
router.get('/create', productsController.productCreate);

module.exports = router;

