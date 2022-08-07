//maksym m1a2k3s4y5m6

const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const { DB_HOST, PORT = 3000 } = process.env

const productsRouter = require('./routes/api/products')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/products', productsRouter)
app.use('*', (req, res) => res.status(404).json({ message: 'Page missing!' }))

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Database connected')
    app.listen(PORT)
  })
  .catch((e) => {
    console.log(e.message)
    process.exit(1)
  })
