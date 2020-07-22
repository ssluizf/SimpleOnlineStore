const mongoose = require('mongoose')

const Product = mongoose.model('Product', {
    name: String, 
    description: String,
    price: Number,
    img_url: String,
    img_name: String,
})

module.exports = Product