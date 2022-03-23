require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const server = express()


//CORS////////////////
const cors = require('cors')

server.use(cors())
server.get('/', function(req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})
server.listen(80, function() {
        console.log('CORS-enabled web server listening on port 80')
    })
    //////////////////////////////////////////////////////////////


server.use(
    express.urlencoded({
        extended: true
    })
)


server.use(express.json())

//rotas da API
const cadastrarUsersRoutes = require('../controllers/controllerUsers')
server.use('/cadastrarUsuarios', cadastrarUsersRoutes)

const cadastrarProductsRoutes = require('../controllers/controllerProducts')
server.use('/cadastrarProduto', cadastrarProductsRoutes)


//rota inicial
server.get('/', (req, res) => {})

//conexão com o banco
const db_user = process.env.db_user
const db_pass = encodeURIComponent(process.env.db_pass)

mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@cluster0.kresv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    .then(() => {
        server.listen(3000, () => console.log("Rodando Servidor"))
    })
    .catch((err) => console.log(err))