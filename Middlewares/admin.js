const path = require('path')
const fs = require('fs')

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));



function adminMiddleware (req,res,next){

    let usuarioLogin = users.find((usuario) => usuario.email == req.session.email);

    if(!req.session.usuarioLogueado.type == "Admin"){
        res.render("/")
    }
    next(); 
}

module.exports = adminMiddleware;