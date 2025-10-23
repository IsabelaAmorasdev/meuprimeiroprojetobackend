const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Simara Conceição',
        imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQE8tKpHlgqZfA/profile-displayphoto-shrink_800_800/B4DZdBMOAAHAAg-/0/1749145412836?e=1763596800&v=beta&t=a0tM0J0b70ucbr10guiqPoRCX9p6Its1k9MaQMaqhTE',
        minibio: 'Desenvolvedora e instrutora'
    })
}
    

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)