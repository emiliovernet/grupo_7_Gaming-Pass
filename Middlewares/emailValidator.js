const path = require('path')
const fs = require('fs')


const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

function emailValidator (req,res,next){
    let emailDB = users.find((usuario) => usuario.email == req.body.email);
    
    if(emailDB){
        return res.render("register",{
            errors:{
                email:{
                    msg:"Este email ya está regisrado"
                }
            },
            oldData: req.body
        })
    }
   
    next();
}

module.exports = emailValidator;