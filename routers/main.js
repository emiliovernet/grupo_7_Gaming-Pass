const express = require('express');

const router = express.Router();

const mainController = require('../controllers/mainController.js')

router.get('/', mainController.home);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/productDetail', mainController.productDetail);
router.get('/productCart', mainController.productCart);
router.get("/productForm", mainController.productForm);

module.exports = router;
