const express = require('express');
const router = express.Router();


const usersController = require('../controllers/usersController.js')
const multer = require('../middlewares/multer')
const validaciones = require('../middlewares/validacionRegister.js')
const emailValidator = require('../Middlewares/emailValidator.js')




router.get('/login', usersController.login);
router.post('/login', usersController.procesarLogin);
router.get('/register', usersController.register);
router.post('/register', multer.single("avatar"), validaciones, emailValidator, usersController.procesarRegister);
router.get("/logout", usersController.logout);



module.exports = router;