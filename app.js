const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require("method-override");


const productsRouter = require('./routers/products');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(methodOverride("_method"))
app.use(express.static(path.join(__dirname,"../public")));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/', productsRouter);

app.listen(3030, () => {
    console.log('Servidor iniciado en http://localhost:3030');
}); 
