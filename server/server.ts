import fastify from 'fastify'

const server = fastify()


server.get('/health', async function handler(request, reply) {
  return { status: 'OK' }
})


server
  .listen({
    host: '0.0.0.0',
    port: 3030,
  })
  .then(() => {
    console.log('🔥 HTTP Server running!')
  })
