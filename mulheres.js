const express = require('express')
const router = express.Router ()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Simara Conceição',
        imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQE8tKpHlgqZfA/profile-displayphoto-shrink_800_800/B4DZdBMOAAHAAg-/0/1749145412836?e=1763596800&v=beta&t=a0tM0J0b70ucbr10guiqPoRCX9p6Its1k9MaQMaqhTE',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
       nome: 'Iana Chan',
       imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQH94QQ7TrKasQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1686007268307?e=1762387200&v=beta&t=uGSikAyBcF2iz91eAHph_3Vhwhf2nSWPOKuUsZ1jpjM',
       minibio: 'Fundadora da Pragramaria'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://media.licdn.com/dms/image/v2/D4E22AQECPTzTVNHPNw/feedshare-shrink_800/feedshare-shrink_800/0/1728047666568?e=1762387200&v=beta&t=eKI47QMmYZefveDf7G6YAKxTG_p0fewIUmdnkZXAr3I',
        minibio: 'Hacker antiracista'
    }
]

function mostraMulheres(request, response) {
response.json(mulheres)
}
function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)