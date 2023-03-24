const express = require('express');
const router = express.Router();


const usersController = require('../controllers/usersController.js')
const multer = require('../middlewares/multer')
const validaciones = require('../middlewares/validacionRegister.js')
const huespedMiddleware = require('../middlewares/huesped.js')




router.get('/login',huespedMiddleware, usersController.login);
router.post('/login', usersController.procesarLogin);
router.get('/register', usersController.register);
router.post('/register', multer.single("avatar"), validaciones, usersController.procesarRegister);
router.get("/logout", usersController.logout);



module.exports = router;