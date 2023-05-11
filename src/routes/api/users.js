const express = require('express');

const usersController = require("../../controllers/api/users");

const router = express.Router();


router.get("/", usersController.list);
router.get("/:id", usersController.getById);


module.exports = router;