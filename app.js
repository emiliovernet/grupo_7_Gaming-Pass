const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require("method-override");


const productsRouter = require('./routers/products');
const usersRouter = require('./routers/users');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.static('public'));

app.use(methodOverride("_method"))
// app.use(express.static(path.join(__dirname, '../public'))); 
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/', productsRouter);
app.use('/users', usersRouter);

app.listen(3030, () => {
    console.log('Servidor iniciado en http://localhost:3030');
}); 
