const Cart = require('../models/Cart');

module.exports = {
    async index(request, response) {
        const ids = await Cart.find();

        return response.json(ids)
    },

    async store(request, response) {
        const { id } = request.body

        const cart = await Cart.create({prod_id: id})

        return response.json(cart)
    },

    async delete(request, response) {
        const id = request.params.id

        const cart = await Cart.remove({prod_id: id});

        return response.json(cart)
    }
}