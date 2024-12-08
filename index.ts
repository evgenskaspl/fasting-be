import fastify from 'fastify'

const server = fastify()

server.get('/ping', async (request, res) => {
    return 'pong\n'
})

server.get('/', async (request, res) => {
    res.send('Hello World!')
})

server.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})