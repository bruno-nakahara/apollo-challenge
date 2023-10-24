import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      text: true,
      required: true,
    },
    description: {
      type: String,
      text: true,
    },
    color: {
      type: String,
      text: true,
    },
    productCategory: {
      type: String,
      text: true,
      required: true,
    },
    price: {
      type: mongoose.Types.Decimal128,
      required: true,
    },
    promotionalPrice: {
      type: mongoose.Types.Decimal128,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('products', ProductSchema);
