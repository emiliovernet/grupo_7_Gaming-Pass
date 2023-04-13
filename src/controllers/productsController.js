const path = require('path')
const {Op} = require("sequelize");

const db = require("../database/models");

const controller = {
    
    home: async (req, res) => {
		try{
            const products = await db.Product.findAll({
                include:["images"]
            });
            console.log(products.product_image)
            res.render("home", { products } );
       }catch(error){
            res.send ({error})
	   }
    },
    new: async (req, res) => {
		const newProduct = {
			image: 'default-image.png',
			...req.body
		};
		try{
            await db.product.create(newProduct);
            res.redirect("/");
        }catch(error){
            res.send({error})
        }
    },
	productDetail: async (req, res) => {
		try{
            const product = await db.Product.findByPk(req.params.id);
            res.render("productDetail" , {product});
            
        }catch(error){
             res.send ({error})
        } 
    },
    productCart: (req, res) => {
        res.render('productCart')
    },
    productCreate: (req,res)=>{
        res.render("productForm")
    },
    edit: async (req, res) => {
		try{
            const product = await db.Product.findByPk(req.params.id);
            res.render("productEditForm",{Product:product});
        }catch(error){
            res.send({error});
        }
    },
    update: async (req, res) => {
		try{
            const newProduct = {
				image: 'default-image.png',
				...req.body
				}
            await db.Product.update(product, 
                {
                    where:{
                        id: req.params.id
                    }
                })
            return res.redirect("/");
        }catch(error){
            return res.send({error});
        }
		
		
	},
    destroy: async (req, res) => {
		try{
            await db.Product.destroy({where: { id: req.params.id}});
            res.redirect ("/movies ")
        }catch(error){
            res.send({error})
        }
	}
}

module.exports = controller;
