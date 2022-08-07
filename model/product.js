const { Schema, model } = require('mangoose')

const productSchema = Schema({
  name: String,
  price: Number,
  location: String,
})

const Product = model('product', productSchema)

module.exports = Product
