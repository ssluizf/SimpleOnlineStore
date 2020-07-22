const mongoose = require('mongoose')

const Cart = mongoose.model('Cart', {
    ids: [String]
})

module.exports = Cart