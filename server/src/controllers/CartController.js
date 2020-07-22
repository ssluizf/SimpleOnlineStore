const Cart = require('../models/Cart')

module.exports = {
    async index(request, response) {
        const ids = await Cart.find();

        return response.json(ids)
    },

    async store(request, response) {
        const ids = request.body

        const cart = await Cart.create({ids})

        return response.json(cart)
    }
}