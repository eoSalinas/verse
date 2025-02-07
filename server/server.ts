import fastify  from 'fastify'

const server = fastify()



server
  .listen({
    host: '0.0.0.0',
    port: 3030,
  })
  .then(() => {
    console.log('🔥 HTTP Server running!')
  })
