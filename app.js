const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const books = require('./controller');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/library');
app.use(bodyParser.json())

// This serves all files placed in the /public
// directory (where gulp will build all React code)
app.use(express.static('public'));

// Also serve everything from our assets directory (static
// assets that you want to manually include)
app.use(express.static('assets'));

app.get('/api/books', books.getBooks);
app.get('/api/books/count', books.countBooks);
app.get('/api/books/:id', books.getBookById);
app.post('/api/books', books.postBook);
app.delete('/api/books/:id', books.deleteBook);

// This route serves your index.html file (which
// initializes React)
app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname,'index.html'));
});

// Start your server, and listen on port 8080.
app.listen(8080, function() {
  console.log("App is now listening on port 8080!");
})
