function adminMiddleware (req,res,next){

    if(!req.session.usuarioLogueado.type == "Admin"){
        res.render("/")
    }
    next(); 
}

module.exports = adminMiddleware;