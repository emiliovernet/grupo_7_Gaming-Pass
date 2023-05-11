const db = require("../../database/models")

const controller = {
    list: async (req, res) => {
        try {
            const users = await db.User.findAll();
            const userData = users.map(user => {
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    detail: "/api/user/" + user.id
                }
            })
            const response = {
                count: users.length,
                users: userData
            }
            res.send(response);
        } catch (error) {
            res.status(500).send({ error });
        }
    },
    getById: async (req, res) => {
        try {
            const user = await db.User.findByPk(req.params.id);

            const response = {
                id: user.id,
                name: user.name,
                email: user.email,
                avatar: "/images/" + user.avatar
            }

            res.send(response);

        } catch (error) {
            res.status(500).send({ error })
        }
    }
}


module.exports = controller;