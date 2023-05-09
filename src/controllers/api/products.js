const db = require("../../database/models")

const controller = {
    list: async (req, res) => {
        try {
            const products = await db.Product.findAll()
            const response = {
                count: products.length,
                countByCategory: "objeto literal con una propiedad",
                products: "array con cosas"
            }
            res.send(response)
        } catch (error) {
            res.status(500).send({ error })
        }
    },
    getById: async (req, res) => {
        try {

        } catch (error) {
            res.status(500).send({ error })
        }
    }
}

module.exports = controller;