function adminMiddleware (req,res,next){

    if(!req.session.userLogged.type === "Admin"){
       return res.redirect("/");
    }
    next(); 
}

//Modificar


module.exports = adminMiddleware;