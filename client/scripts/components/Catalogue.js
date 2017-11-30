import React from 'react';
import Book from './Book';
import _ from 'lodash';

class Catalogue extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'sortByGenre',
      genre: 'Fiction',
    }
  }

  render() {
    const bookFilter = () => {
      let books = Array.from(this.props.books);
  
      switch (this.state.filter) {
        case 'mostRecent':
          let recentlyAdded = _.sortBy(this.props.books, ['update']).reverse();
          console.log(recentlyAdded);
          return recentlyAdded.slice(0,3);
          break;
        case 'sortByGenre':
          let bookGenre = this.state.genre;
          console.log(bookGenre);
          let thisGenre = _.filter(this.props.books, 
            function(book) {
              console.log(book);
              return _.includes(book.genres, bookGenre);
            });
          return thisGenre;
          break;
        default:
          return books;
      }
    }

    const filteredBooks = bookFilter();

    return (
      <div className="catalogue-content">
        <div className="wrapper catalogue-wrapper">
          { filteredBooks.map(book => <Book fetchBooks={this.props.fetchBooks} deleteBook={this.props.deleteBook} book={book} key={book._id} {...book} /> )}
        </div>
      </div>
    )
  }
}

export default Catalogue;


