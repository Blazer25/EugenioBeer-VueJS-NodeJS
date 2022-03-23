const mongoose = require('mongoose')

const cadastrarUsuarios = mongoose.model('cadastrarUsuarios', {
    fullname: String,
    email: String,
    password: String,
})

module.exports = cadastrarUsuarios