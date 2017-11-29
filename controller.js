const Book = require('./model.js');
const books = {};

// GET
books.getBooks = (req, res) => {
  Book.find(function(err, docs) {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).send(docs)
    }
  });
};

books.countBooks = (req, res) => {
  Book.count()
  .then((count) => res.json(count));  
}

// POST
books.postBook = (req, res) => {
  const bookModel = new Book();
  const book = Object.assign(bookModel, req.body);

  book.save((err, doc) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).send(doc)
    }
  })
}

// DELETE
books.deleteBook = (req, res) => {
  const bookId = req.params.id;
  console.log(bookId);

  Book.remove({ _id: bookId}, (err, doc) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({message: 'Book successfully deleted'});
    }
  });
}

// PUT

module.exports = books;
