const livroService = require("../services/livro")

function getLivros(req, res) {
    try {
        const livros = livroService.getTodosLivros()
        res.json(livros)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

/* function getLivro(req, res) {
    try {
        const id = req.params.id
        const livro = livroService.getLivrosPorId(id)
        res.json(livro)
    } catch (error) {
        res.status(500).json(error.message)
    }
} */

function getLivro(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const livro = livroService.getLivrosPorId(id)
            res.json(livro)
        } else {
            res.status(422).json("Id inválido")
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        if(req.body.nome){
            livroService.insereLivro(livroNovo)
            res.status(201)
            res.json("Livro inserido com sucesso")
        } else {
            res.status(422)
            res.json("O campo nome é obrigatório")
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id
        if(id && Number(id)){
            const body = req.body
            livroService.modificaLivro(body, id)
            res.json("Item atualizado com sucesso!")
        } else {
            res.status(422)
            res.json("Id inválido")
        } 
    } catch (error) {
        res.status(500).json(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id
        if(id && Number(id)) {
            livroService.deleteLivro(id)
            res.json("Item deletado com sucesso!")
        } else {
            res.status(422)
            res.json("Id inválido")
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}




/* const fs = require("fs")

function getLivros(req, res){
    try {
        const livros = JSON.parse(fs.readFileSync("livros.json"))
        res.json(livros)
    } catch (error) {
        res.status(500)
        res.json(error.message)
    }
}

module.exports = {
    getLivros
}
*/