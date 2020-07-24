const mongoose = require('mongoose')

const Cart = mongoose.model('Cart', {
    prod_id: String
})

module.exports = Cart