//maksym m1a2k3s4y5m6
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const productsRouter = require('./routes/api/products')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/products', productsRouter)
app.use('*', (req, res) => res.status(404).json({ message: 'Page missing!' }))

module.exports = app
