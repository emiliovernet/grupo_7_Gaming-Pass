const path = require('path')
const fs = require('fs')
const { validationResult } = require("express-validator");

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
    login: (req, res) => {
        res.render('login')
    },
    
    register: (req, res) => {
        res.render('register')
    },
    perfil:(req,res) => {
        res.render("")
    },
    procesarRegister:(req,res) => {
       const resultadosDeValidacion = validationResult(req);
       
       if(resultadosDeValidacion.errors.length > 0) {
            res.render("register", {
                errors: resultadosDeValidacion.mapped(),
                oldData: req.body
            });
       }
    
    }


}



module.exports = controller;