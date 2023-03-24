function adminMiddleware (req,res,next){

    if(!req.session.userLogged.type == "Admin"){
        res.render("/")
    }
    next(); 
}

module.exports = adminMiddleware;