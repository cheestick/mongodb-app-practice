const { Schema, model } = require('mongoose')

const productSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    price: {
      type: Number,
      required: [true, 'price must be exist'],
      min: 0.01,
    },
    active: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      enum: ['basic', 'sale', 'stock'],
      default: 'basic',
    },
    code: {
      type: String,
      required: true,
      unique: true, // use in conjunction with mongoDB indexes only
      match: /^[0-9]{9}$/,
    },
  },
  { versionKey: false, timestamps: true }
)

const Product = model('product', productSchema)

module.exports = Product
