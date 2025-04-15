const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema(
  {
    // <creating-property-schema />
    total: {
      type: Number,
      required: [true, 'Please enter name  total'],
    },
    address: {
      type: String,
      required: [true, 'Please enter name  address'],
    },
  },
  { timestamps: true, versionKey: false },
);
// <creating-function-schema />

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
