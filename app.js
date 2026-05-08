const express = require("express")
const app = express()
const port = 8000
const rotaLivro = require("./rotas/livro")

// para usar o body
app.use(express.json())

app.use('/livros', rotaLivro)


app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)    
})