const favoritoService = require("../services/favorito")

function getFavoritos(req, res) {
    try {
        const favoritos = favoritoService.getTodosFavoritos()
        res.json(favoritos)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

function postFavorito(req, res) {
    try {
        const id = req.params.id
        if(id && Number(id)) {
            favoritoService.insereFavorito(id)
            res.status(201).json("Favorito inserido com sucesso")
        } else {
            res.status(422).json("Id inválido")
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id
        
        if(id && Number(id)) {
            favoritoService.deleteFavorito(id)
            res.json("Favorito deletado com sucesso!")
        } else {
            res.status(422).json("Id inválido")
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
}