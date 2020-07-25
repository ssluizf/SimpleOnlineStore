const mongoose = require('mongoose')

const Cart = mongoose.model('Cart', {
    prod_id: String,
    quant: Number
})

module.exports = Cart