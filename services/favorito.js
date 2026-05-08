const fs = require("fs")

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function insereFavorito(id) {
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))
    // Adicionamos o novo ID na lista de favoritos
    const novaListaDeFavoritos = [...favoritos, { id: id }]
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeFavoritos, null, 2))
}

function deleteFavorito(id) {
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))
    // Filtramos para manter apenas os favoritos que NÃO possuem o ID recebido
    const favoritosFiltrados = favoritos.filter(favorito => favorito.id !== id) 
    
    if (favoritos.length === favoritosFiltrados.length) {
        console.log("Favorito não encontrado.");
        return;
    }
    
    fs.writeFileSync("favoritos.json", JSON.stringify(favoritosFiltrados, null, 2));
}

module.exports = {
    getTodosFavoritos,
    insereFavorito,
    deleteFavorito
}