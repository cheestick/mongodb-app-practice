//maksym m1a2k3s4y5m6

const mongoose = require('mongoose')

const DB_HOST =
  'mongodb+srv://maksym:m1a2k3s4y5m6@cluster0.enlhisl.mongodb.net/online_shop?retryWrites=true&w=majority'

mongoose
  .connect(DB_HOST)
  .then(() => console.log('Database connected'))
  .catch((e) => {
    console.log(e.message)
    process.exit(1)
  })
