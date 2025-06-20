const { payment } = require('../utils/enum');
const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema(
  {
    // <creating-property-schema />
    methodPayment: {
      type: String,
      enum: Object.values(payment),
    },
    cart: [
      {
        // <creating-property-object-cart />
        price: {
          type: Number,
          required: [true, 'Please enter name  price'],
        },
        quantity: {
          type: Number,
          required: [true, 'Please enter name  quantity'],
        },
        productId: {
          type: mongoose.Schema.ObjectId,
          ref: 'Product',
          required: [true, 'Please enter name  product'],
        },
      },
    ],
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Please enter name  user'],
    },
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

orderSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'cart.productId',
    select: '-_id',
  });
  next();
});

orderSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'userId',
    select: '-_id',
  });
  next();
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
