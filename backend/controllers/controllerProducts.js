const controllerRoutes = require('express').Router()

//model
const cadastrarProdutos = require('../config/dbProduct')

//Criar dados
controllerRoutes.post('/', async(req, res) => {
    const { nameproduct, brand, price, img } = req.body

    if (!nameproduct) {
        return res.status(422).json({ error: "Nome inválido" })

    } else if (!brand) {
        return res.status(422).json({ error: "Marca inválida" })

    } else if (!price) {
        return res.status(422).json({ error: "Preço inválido" })
    }

    //  else if (!img) {
    //     return res.status(422).json({ error: "Arquivo inválido" })
    // }

    const registerProduct = {
        nameproduct,
        brand,
        price,
        img
    }
    try {
        await cadastrarProdutos.create(registerProduct)
        res.status(201).json({ mensagem: "Produto cadastrado com sucesso" })

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//Resgate dos dados
controllerRoutes.get('/', async(req, res) => {

    const registeredProducts = await cadastrarProdutos.find()
    try {
        res.status(200).json(registeredProducts)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//resgatar os dados por ID
controllerRoutes.get('/:id', async(req, res) => {

    const id = req.params.id
    const registeredProducts = await cadastrarProdutos.findOne({ _id: id })

    try {
        res.status(200).json(registeredProducts)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})


//Atualizar dados
controllerRoutes.patch('/:id', async(req, res) => {
    const id = req.params.id

    const { nameproduct, brand, price, img } = req.body

    const registerProduct = {
        nameproduct,
        brand,
        price,
        img
    }

    try {
        const registeredProducts = await cadastrarProdutos.updateOne({ _id: id }, cadastro)

        if (registeredProducts.matchedCount === 0) {
            res.status(422).json({ message: 'Produto não encontrado!' })
            return
        }

        res.status(200).json(registerProduct)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})


//Excluir dados
controllerRoutes.delete('/:id', async(req, res) => {
    const id = req.params.id
    const registeredProducts = await cadastrarProdutos.findOne({ _id: id })

    try {
        await cadastrarProdutos.deleteOne({ _id: id })
        res.status(200).json({ mensagem: "Produto deletado com sucesso" })

    } catch (error) {
        res.status(500).json({ error: error })
    }
})


module.exports = controllerRoutes