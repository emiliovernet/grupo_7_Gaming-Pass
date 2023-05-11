const express = require('express');

const productController = require("../../controllers/api/products");

const router = express.Router();


router.get("/", productController.list);
router.get("/:id", productController.getById);


module.exports = router;