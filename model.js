const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  checkedOut: { type: Boolean, default: false },
  publisher: String,
  published: Number,
  language: String,
  genres: [],
  about: String,
  cover: String
});

module.exports = mongoose.model('Book', BookSchema);
