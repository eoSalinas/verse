import fastify from 'fastify'

export const app = fastify({
  logger: true,
})

app.get('/health', async function handler(_, reply) {
  return reply.status(200).send({ status: 'OK' })
})
