const mongoose = require('mongoose')


const cadastrarProdutos = mongoose.model('cadastrarProdutos', {
    nameproduct: String,
    brand: String,
    price: Number,
    img: String
})

module.exports = cadastrarProdutos