const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController.js')


// Productos
router.post('/productForm', productsController.store);
router.put('/:id', productsController.update); 
router.get('/:id/edit', productsController.edit); 
router.delete('/:id', productsController.destroy); 
router.get('/', productsController.home);
router.get('/detail/:id/', productsController.productDetail);
// router.get('/productCart', productsController.productCart);
router.get('/create', productsController.productCreate);

module.exports = router;
