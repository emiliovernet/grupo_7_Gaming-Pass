const express = require('express');

const productController = require("../../controllers/api/users");

const router = express.Router();


router.get("/", productController.list);


module.exports = router;