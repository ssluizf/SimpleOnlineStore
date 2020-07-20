const mongoose = require('mongoose')

const Product = mongoose.model('Product', {
    id: Number,
    name: String, 
    description: String,
    imgUrl: String,
    price: Number,
})

module.exports = { Product }