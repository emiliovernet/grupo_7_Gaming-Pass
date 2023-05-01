function adminMiddleware (req,res,next){

    if(!req.session.userLogged.User.dataValues.roles_id == 1){
       return res.redirect("/");
    }
    next(); 
}

// Modificar



module.exports = adminMiddleware;