require("dotenv").config();
const express = require('express');
const session = require("express-session")
const methodOverride = require("method-override");
const path = require('path');


const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const userLoggedMiddleware = require('./Middlewares/userLogged')

// Require Routes API

const productsRoutesApi = require ("./routes/api/products");
const usersRoutesApi = require ("./routes/api/users")

// End Require Routes API

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret:"Esto es un secreto",
    resave: false,
    saveUninitialized: false
}))
app.use(userLoggedMiddleware);


app.use('/', productsRouter);
app.use('/users', usersRouter);

// Routes API
app.use("/api/product", productsRoutesApi);
app.use("/api/user", usersRoutesApi);
// End Routes API

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
}); 