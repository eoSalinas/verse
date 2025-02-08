import { server } from 'app'
import dotenv from 'dotenv'

dotenv.config()

const port = Number(process.env.PORT) ?? 3030

server
  .listen({
    host: '0.0.0.0',
    port,
  })
  .then(() => {
    console.log('🔥 HTTP Server running!')
  })
