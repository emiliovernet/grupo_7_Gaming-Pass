const path = require('path')

const controller = {
home: (req, res) => {
    res.render('home')
},

login: (req, res) => {
    res.render('login')
},

register: (req, res) => {
    res.render('register')
},

productDetail: (req, res) => {
    res.render('productDetail')
},
productCart: (req, res) => {
    res.render('productCart')
},
productForm: (req,res)=>{
    res.render("productForm")
}
};

module.exports = controller;
