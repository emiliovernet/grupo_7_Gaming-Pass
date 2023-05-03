const {Op} = require("sequelize");
const { validationResult } = require("express-validator");
const db = require("../database/models");

const controller = {
    
    home: async (req, res) => {
		try{
            const products = await db.Product.findAll({
                include:["images"]
            });
            res.render("home", { products } );

       }catch(error){
            res.send ({error})
	   }
    },
    new: async (req, res) => {
        const resultadosDeValidacion = validationResult(req);
       
       if (resultadosDeValidacion.errors.length > 0) {
           return res.render("productForm", {
                errors: resultadosDeValidacion.mapped(),
                oldData: req.body
            });
       }
		const newProduct = {
			...req.body
		};
		try{
            const productCreated = await db.Product.create(newProduct);
            await db.Product_image.create({
                products_id : productCreated.id,
                name : req.file })
                // ? req.file.filename :'default-image.png'
            res.redirect("/");

        }catch(error){
            res.send({error})
        }
    },
	productDetail: async (req, res) => {
		try{
            const product = await db.Product.findByPk(req.params.id, {
                include:["images"]
            });
            // res.send(product)
            res.render("productDetail" , {product});
            
        }catch(error){
             res.send ({error})
        } 
    },
    productCart: (req, res) => {
        res.render('productCart')
    },
    productCreate: async (req,res)=>{
        const categories = await db.Product_Category.findAll();
        res.render("productForm",{categories});
    },
    edit: async (req, res) => {
		try{
            const product = await db.Product.findByPk(req.params.id);
            res.render("productEditForm",{ product });
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
            res.redirect ("/")
        }catch(error){
            res.send({error})
        }
	}
}

module.exports = controller;
