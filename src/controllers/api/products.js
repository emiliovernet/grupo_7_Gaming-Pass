const { Op } = require("sequelize")
const db = require("../../database/models")

const controller = {
    list: async (req, res) => {
        try {
            const products = await db.Product.findAll({
                include: ["product_category"]
            });
            const notebooks = await db.Product.findAll({ where: { product_categories_id: 1 } });
            const monitores = await db.Product.findAll({ where: { product_categories_id: 2 } });
            const memorias = await db.Product.findAll({ where: { product_categories_id: 3 } });

            const productsData = products.map(product => {
                return {
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    category: product.product_category.name,
                    detail: "/api/product/" + product.id
                }
            })

            const response = {
                count: products.length,
                countByCategory: {
                    memorias: memorias.length,
                    notebooks: notebooks.length,
                    monitores: monitores.length
                },
                products: productsData
            }

            res.send(response);

        } catch (error) {
            res.status(500).send({ error });
        }
    },
    getById: async (req, res) => {
        try {
            const product = await db.Product.findByPk(req.params.id, {
                include: ["images"]
            });

            const response = {
                id: product.id,
                name: product.name,
                price: product.price,
                discount: product.discount,
                description: product.description,
                image: "http://localhost:3000/images/" + product.images[0].name
            }
            res.send(response);

        } catch (error) {
            res.status(500).send({ error })
        }
    }
}

module.exports = controller;