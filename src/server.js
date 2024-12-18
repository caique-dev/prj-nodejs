import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
    const {method, url } = req

    if (method == 'GET' && url == '/users') {
        // console.log("Criação de usuário:")
        // console.log("...")
        users.push({
            id: 1,
            nome: "caique",
            email: "aaa@teste.com"
        })

        // return res.end("usuário criado")
        console.log(req.headers)
        return res.end("ola")
    }

    if (method == 'POST' && url == '/users') {
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }


    return res.end('Tudo certo')
})

server.listen(3333)