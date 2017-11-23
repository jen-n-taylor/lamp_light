import React from 'react';
import Book from './Book';

const Catalogue = (props) => {
  return (
    <div className="wrapper">
      {props.books.map(book => <Book fetchBooks={props.fetchBooks} deleteBook={props.deleteBook} book={book} key={book._id} {...book} /> )}
    </div>
  )
}

export default Catalogue;


