const express = require('express');
const router = express.Router();


const usersController = require('../controllers/usersController.js')
const multer = require('../Middlewares/multer')
const validaciones = require('../Middlewares/validacionRegister.js')



router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.post('/register', multer.single("avatar"), validaciones, usersController.procesarRegister);
router.get("/perfil/:userId", usersController.perfil);



module.exports = router;