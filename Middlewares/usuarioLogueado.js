function usuarioLogueadoMiddleware (req,res,next){
    res.locals.logueado = false;


    next();
}

module.exports = usuarioLogueadoMiddleware;