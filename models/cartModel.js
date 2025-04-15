const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema(
  {
    // <creating-property-schema />
    cartprice: {
      type: Number,
      required: [true, 'Please enter name  cartprice'],
    },
    quantity: {
      type: Number,
      required: [true, 'Please enter name  quantity'],
    },
  },
  { timestamps: true, versionKey: false },
);
// <creating-function-schema />

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
