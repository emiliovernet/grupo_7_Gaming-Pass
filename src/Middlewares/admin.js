function adminMiddleware (req,res,next){

    if(req.session.userLogged?.role != "Admin" ){
       return res.redirect("/");
    }
    next(); 
}


module.exports = adminMiddleware;