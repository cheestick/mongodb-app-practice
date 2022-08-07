//maksym m1a2k3s4y5m6

const mongoose = require('mongoose')
require('dotenv').config()

const { DB_HOST } = process.env

mongoose
  .connect(DB_HOST)
  .then(() => console.log('Database connected'))
  .catch((e) => {
    console.log(e.message)
    process.exit(1)
  })
