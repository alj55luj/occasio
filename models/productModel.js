const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
  {
    // <creating-property-schema />
    price: {
      type: Number,
      required: [true, 'Please enter name  price'],
    },
    category: {
      type: String,
      required: [true, 'Please enter name  category'],
    },
    type: {
      type: String,
      required: [true, 'Please enter name  type'],
    },
    photo: {
      type: String,
      required: [true, 'Please enter name  photo'],
    },
    descripion: {
      type: String,
      required: [true, 'Please enter name  descripion'],
    },
    name: {
      type: String,
      required: [true, 'Please enter name  name'],
    },
  },
  { timestamps: true, versionKey: false },
);
// <creating-function-schema />

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
