const Product = require('../models/Product')
const { db } = require('../../.env')

module.exports = {
    async index(request, response) {
        const products = await Product.find();

        return response.json(products)
    },

    async indexById(request, response) {
        const id = request.params.id

        const product = await Product.findOne({ _id: id });

        return response.json(product)
    },

    async store(request, response) {
        const { name, description, price, img_name } = request.body
        const img_url = `http://${db.host}:${db.port}/uploads/${img_name}`

        const product = await Product.create({
            name,
            description,
            price,
            img_url,
        })

        return response.json(product)
    }
}