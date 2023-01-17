const path = require('path')

const controller = {
home: (req, res) => {
    res.sendFile(path.join(__dirname,'../views/home.html'))
},

login: (req, res) => {
    res.sendFile(path.join(__dirname,'../views/login.html'))
},

register: (req, res) => {
    res.sendFile(path.join(__dirname,'../views/register.html'))
},

productDetail: (req, res) => {
    res.sendFile(path.join(__dirname,'../views/productDetail.html'))
},
productCart: (req, res) => {
    res.sendFile(path.join(__dirname,'../views/productCart.html'))
}
};

module.exports = controller;
