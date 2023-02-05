const path = require('path')
const fs = require('fs')
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    
    // USUARIOS
    login: (req, res) => {
        res.render('login')
    },
    
    register: (req, res) => {
        res.render('register')
    },

    // PRODUCTOS
    home: (req, res) => {
        res.render('home')
    },

	productDetail: (req, res) => {
		const { id } = req.params;
		const product = products.find((product) => product.id == id);
		res.render('productDetail', { product });
	},
    productCart: (req, res) => {
        res.render('productCart')
    },
    productCreate: (req,res)=>{
        res.render("productForm")
    }
};

module.exports = controller;
