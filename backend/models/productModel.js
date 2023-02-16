import mongoose from 'mongoose'

const randomShelf = () => {
  const shelves = ['A1', 'B2', 'C1', 'A2', 'C2', 'B3', 'A3', 'B1', 'C3']
  return shelves[Math.floor(Math.random() * shelves.length)]
}

const randomPrice = () => {
  const prices = [
    1.29, 0.84, 1.54, 2.21, 1, 2, 2.43, 6.12, 1.9, 2.78, 1.95, 0.43, 0.55, 0.4,
  ]
  return prices[Math.floor(Math.random() * prices.length)]
}

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sku: {
    type: Number,
    required: true,
  },
  ean: {
    type: Number,
    required: true,
    unique: true,
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: randomPrice(),
  },
  rating: {
    type: Number,
    required: false,
    default: 3,
  },
  numReviews: {
    type: Number,
    required: false,
    default: 0,
  },
  image: {
    type: String,
    required: false,
    default: 'https://app.advaiet.com/item_dfile/default_product.png',
  },
  category: {
    type: String,
    required: true,
  },
  shelf: {
    type: String,
    required: false,
    default: randomShelf(),
  },
  backstock: {
    type: String,
    required: false,
    default: randomShelf(),
  },
})

const productModel = mongoose.model('product', productSchema)

export default productModel
