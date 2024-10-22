const express = require('express')
const redis = require('redis')
const compendio = require('./routes/compendio')
const index = require('./middleware/index')
const notFound = require('./middleware/notFound')
const connectDB = require('./config/database')
const setupSwagger = require('./config/swagger')


const app = express()

app.use(express.json())

connectDB()


const client = redis.createClient({
    url: 'redis://redis:6379'
})

client.on('error', (err) => console.error('Redis error:', err))

async function startServer() {
  try {
    await client.connect() 

    setupSwagger(app)

    app.use("/compendio", compendio)
    app.use(notFound)

    const port = 4000
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  } catch (err) {
    console.error('Failed to connect to Redis:', err)
  }
}

startServer()
