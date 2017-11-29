const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  authorFirst: {
    type: String,
  },
  authorLast: {
    type: String,
    required: true,
  },
  checkedOut: { 
    type: Boolean, 
    default: false,
  },
  update: {
    type: Date, 
    default: Date.now,
  },
  publisher: {
    type: String,
    required: true,
  },
  published: {
    type: Number, 
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  genres: {
    type: Array,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Book', BookSchema);
