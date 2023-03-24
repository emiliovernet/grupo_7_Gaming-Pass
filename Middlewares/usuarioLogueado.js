function usuarioLogueadoMiddleware (req,res,next){
    res.locals.user = false;
    if(req.session.usuarioLogueado){
        res.locals.user = req.session.usuarioLogueado;
    }

    next();
}

module.exports = usuarioLogueadoMiddleware;