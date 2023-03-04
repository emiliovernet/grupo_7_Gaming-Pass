const path = require('path')
const fs = require('fs')

const usersFilePath = path.join(__dirname, '../data/users.json');
const products = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
    login: (req, res) => {
        res.render('login')
    },
    
    register: (req, res) => {
        res.render('register')
    },
    perfil:(req,res) => {
        res.render("")
    }



}



module.exports = controller;