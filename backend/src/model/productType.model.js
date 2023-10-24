import mongoose from 'mongoose';

const ProductTypeSchema = new mongoose.Schema({
  category: {
    type: String,
    text: true,
    required: true,
  },
  discount: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
});

module.exports = mongoose.model('categories', ProductTypeSchema);
