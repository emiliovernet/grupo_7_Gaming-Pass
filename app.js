const express = require('express');
const session = require("express-session")

const app = express();
const path = require('path');
const usuarioLogueadoMiddleware = require("./middlewares/usuarioLogueado");

app.use(session({
    secret:"Esto es un secreto",
    resave: false,
    saveUninitialized: false
}))
app.use(usuarioLogueadoMiddleware);
const methodOverride = require("method-override");

const productsRouter = require('./routers/products');
const usersRouter = require('./routers/users');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static('public'));
app.use(express.json());


app.use(methodOverride("_method"))
app.use(express.urlencoded({extended:false}));

app.listen(3030, () => {
    console.log('Servidor iniciado en http://localhost:3030');
}); 

app.use('/', productsRouter);
app.use('/users', usersRouter);