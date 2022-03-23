const controllerRoutes = require('express').Router()

//Model
const cadastrarUsuarios = require('../config/dbUsers')

//Criação de dados
controllerRoutes.post('/', async(req, res) => {
    const { email, fullname, password, confirmPassword } = req.body

    if (!fullname) {
        return res.status(422).json({ error: "Nome inválido" })

    } else if (!email) {
        return res.status(422).json({ error: "E-mail inválido" })

    } else if (!password) {
        return res.status(422).json({ error: "Senha inválida" })

    } else if (password != confirmPassword) {
        return res.status(422).json({ error: "Senhas Diferentes" })
    }

    const cadastro = {
        fullname,
        email,
        password,
    }
    try {
        await cadastrarUsuarios.create(cadastro)
        res.status(201).json({ mensagem: "User cadastrado com sucesso" })

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//Resgate geral dos dados - Leitura dos dados
controllerRoutes.get('/', async(req, res) => {

    //pega os dados da collection
    const cadastrados = await cadastrarUsuarios.find()

    try {
        res.status(200).json(cadastrados)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//Resgate dos dados por ID
controllerRoutes.get('/:id', async(req, res) => {

    //req.params irá extrair o dado da requisição pela URL
    const id = req.params.id
    const cadastrados = await cadastrarUsuarios.findOne({ _id: id })


    try {
        //irá selecionar o dado pelo ID
        res.status(200).json(cadastrados)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//Atualizar dados
controllerRoutes.patch('/:id', async(req, res) => {
    const id = req.params.id

    const { email, fullname, password } = req.body

    const cadastro = {
        fullname,
        email,
        password,
    }

    try {
        const cadastrados = await cadastrarUsuarios.updateOne({ _id: id }, cadastro)

        if (cadastrados.matchedCount === 0) {
            res.status(422).json({ message: 'Usuário não encontrado!' })
            return
        }

        res.status(200).json(cadastro)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})


//Excluir dados
controllerRoutes.delete('/:id', async(req, res) => {
    const id = req.params.id
    const cadastrados = await cadastrarUsuarios.findOne({ _id: id })

    try {
        await cadastrarUsuarios.deleteOne({ _id: id })
        res.status(200).json({ mensagem: "Usuário deletado com sucesso" })

    } catch (error) {
        res.status(500).json({ error: error })
    }
})


module.exports = controllerRoutes