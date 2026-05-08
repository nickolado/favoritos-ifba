const fs = require("fs")

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivrosPorId(id) {
    const livros = getTodosLivros()
    return livros.find(livro => livro.id === id)
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaListaDeLivros = [ ...livros, livroNovo]
    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificadores, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
    const conteudoMudado = {
        ...livrosAtuais[indiceModificado], ...modificadores }
    livrosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))    
}

function deleteLivro(id) {
    const livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const livrosFiltrados = livrosAtuais.filter(livro => livro.id !== id) 
    if (livrosAtuais.length === livrosFiltrados.length) {
        console.log("Livro não encontrado.");
        return;
    }
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados, null, 2));
}


module.exports = {
    getTodosLivros,
    getLivrosPorId,
    insereLivro,
    modificaLivro,
    deleteLivro
}