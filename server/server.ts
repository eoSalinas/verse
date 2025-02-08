import { app } from 'app'
import dotenv from 'dotenv'

dotenv.config()

const port = Number(process.env.PORT) ?? 3030

app
  .listen({
    host: '0.0.0.0',
    port,
  })
  .then(() => {
    console.log('🔥 HTTP Server running!')
  })
