const express = require('express');

const app = express();

const mainRouter = require('./routers/main.js');

app.use(express.static('public'));

app.use('/', mainRouter)

app.listen(3030, () => {
    console.log('Servidor iniciado en http://localhost:3030');
}); 
