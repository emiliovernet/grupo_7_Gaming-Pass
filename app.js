const express = require('express');
const session = require("express-session")
const methodOverride = require("method-override");

const app = express();
const path = require('path');



app.use(methodOverride("_method"))
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static('public'));
app.use(express.json());

app.use(session({
    secret:"Esto es un secreto",
    resave: false,
    saveUninitialized: false
}))

const userLoggedMiddleware = require('./Middlewares/userLogged.js')

app.use(userLoggedMiddleware)


const productsRouter = require('./routers/products');
const usersRouter = require('./routers/users');


app.use('/', productsRouter);
app.use('/users', usersRouter);


app.listen(3030, () => {
    console.log('Servidor iniciado en http://localhost:3030');
}); 