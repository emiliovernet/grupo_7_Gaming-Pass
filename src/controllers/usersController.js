const { Op } = require("sequelize");
const db = require("../database/models");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");


const controller = {
    login: (req, res) => {
        res.render('login')
    },
    procesarLogin: async (req, res) => {

        try {
            const client = await db.User.findOne({
                where: {
                    email: req.body.email
                },
                include:["role"]

            })
            console.log(client);
            if (client) {
                let contraseñaOk = bcryptjs.compareSync(req.body.password, client.password);

                if (contraseñaOk) {
                    req.session.userLogged = {
                        id: client.id,
                        email: client.email,
                        role:client.role.name,
                        avatar: client.avatar
                    };

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

        }
        catch (error) {
            res.send("no lo encontre!")
        }
    },

    register: (req, res) => {
        res.render('register')
    },

    procesarRegister: async (req, res) => {
        const resultadosDeValidacion = validationResult(req);

        if (resultadosDeValidacion.errors.length > 0) {
            return res.render("register", {
                errors: resultadosDeValidacion.mapped(),
                oldData: req.body
            });
        }

        const nuevoUsuario = {
            name: req.body.name,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename,
            roles_id: "2"
        };

        try {
            await db.User.create(nuevoUsuario);
            res.redirect('/')
        }
        catch (error) {
            res.send({ error })
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect("/");
    }


}



module.exports = controller;