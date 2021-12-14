const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  year: {
    type: String,
    required: true
  },
  make: {
    type: String,
    required: true
  },
  model: {
    type: String
  },
  price: {
    type: String
  },
  type: {
    type: String,
    default: 'Used'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('car', CarSchema);
