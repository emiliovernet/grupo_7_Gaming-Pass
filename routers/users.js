const express = require('express');
const router = express.Router();


const usersController = require('../controllers/usersController.js')
const multer = require('../Middlewares/multer')
const validaciones = require('../Middlewares/validacionRegister.js')
const huespedMiddleware = require('../Middlewares/huesped.js')




router.get('/login',huespedMiddleware, usersController.login);
router.post('/login', usersController.procesarLogin);
router.get('/register', usersController.register);
router.post('/register', multer.single("avatar"), validaciones, usersController.procesarRegister);
router.get("/logout", usersController.logout);



module.exports = router;