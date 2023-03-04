const path = require('path')
const fs = require('fs')

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    
    home: (req, res) => {
        res.render('home', {
			products
		});
    },

    store: (req, res) => {
		const newProduct = {
			id: products[products.length - 1].id + 1,
			image: 'default-image.png',
			...req.body
		};
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/')
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
    },
    edit: (req, res) => {
		const productToEdit = products.find((product) => product.id == req.params.id);
		res.render('productEditForm', {productToEdit})
	},
    update: (req, res) => {
		let indexToEdit;
		let productToEdit = products.find((product, index) => {
			if (product.id == req.params.id) {
				indexToEdit = index;
				return true;
			}
			return false;
		});
		productToEdit = {
			...productToEdit,
			...req.body
		};
		products[indexToEdit]= productToEdit;
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/');
	},
    destroy: (req, res) => {
		let productsFiltered = products.filter((product) => product.id != req.params.id);
		fs.writeFileSync(productsFilePath, JSON.stringify(productsFiltered, null, ' '));
		res.redirect('/');
	}
};

module.exports = controller;
