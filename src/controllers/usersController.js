const path = require('path')
const fs = require('fs')

const bcryptjs = require("bcryptjs");

const { validationResult } = require("express-validator");


const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
    login: (req, res) => {
        res.render('login')
    },
    procesarLogin:(req,res)=>{
        let userToLogin = users.find((usuario) => usuario.email == req.body.email);
        
        if(userToLogin){
            let contraseñaOk = bcryptjs.compareSync(req.body.password, userToLogin.password);
            
            if(contraseñaOk){
                req.session.userLogged = userToLogin;
                return res.redirect('/');
            }
            
            return res.render("login", {
               errors: {
                   email: {
                       msg: "Email o contraseña incorrecto"
                   }
               }
           })
            
         }

        return res.render("login", {
            errors: {
                email: {
                    msg: "Email o contraseña incorrecto"
                }
            }
        })


    },
    
    register: (req, res) => {
        res.render('register')
    },
   
    procesarRegister: (req,res) => {
       const resultadosDeValidacion = validationResult(req);
       
       if (resultadosDeValidacion.errors.length > 0) {
            res.render("register", {
                errors: resultadosDeValidacion.mapped(),
                oldData: req.body
            });
       }


       const nuevoUsuario = {
        id: users[users.length - 1].id + 1,
        ...req.body,
        password: bcryptjs.hashSync(req.body.password , 10),
        type:"Customer",
        avatar: req.file.filename
              };
            users.push(nuevoUsuario);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
        res.redirect('/')
    },
    logout:(req,res) => {
        req.session.destroy();
        return res.redirect("/");
    }


}



module.exports = controller;