import fastify from 'fastify'

export const server = fastify({
  logger: true,
})

server.get('/health', async function handler(_, reply) {
  return reply.status(200).send({ status: 'OK' })
})
