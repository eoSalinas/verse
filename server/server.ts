import fastify from 'fastify'
import dotenv from 'dotenv'
const server = fastify({
  logger: true
})

dotenv.config();



const port = Number(process.env.PORT) ?? 3030

server
  .listen({
    host: '0.0.0.0',
    port
  })
  .then(() => {
    console.log('🔥 HTTP Server running!')
  })

server.get('/health', async function handler(_, reply) {
  return reply.status(200).send({ status: 'OK' })
})
