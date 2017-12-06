import React from 'react';
import Book from './Book';
import _ from 'lodash';

class Catalogue extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'mostRecent',
      genre: '',
      authorLast: '',
    }
  }

  render() {
    const bookFilter = () => {
      let books = Array.from(this.props.books);
      let filter = this.state.filter;
  
      switch (this.state.filter) {
        case 'mostRecent':
          let recentlyAdded = _.sortBy(this.props.books, ['update']).reverse();
          console.log(recentlyAdded);
          return recentlyAdded.slice(0,3);
          break;
        case 'sortByGenre':
          let bookGenre = this.state.genre;
          let thisGenre = _.filter(this.props.books, 
            function(book) {
              return _.includes(book.genres, bookGenre);
            });
          return thisGenre;
          break;
        case 'sortByAuthor':
          let bookAuthor = this.state.authorLast;
          let thisAuthor = _.filter(this.props.books, 
            function(book){
              return _.includes(book.authorLast, bookAuthor)
            });
          return thisAuthor;
        default:
            return mostRecent;
      }
    }

    const filteredBooks = bookFilter();

    return (
      <div className="catalogue-content">
        <ul className="wrapper catalogue-wrapper">
          { filteredBooks.map(book => <Book fetchBooks={this.props.fetchBooks} deleteBook={this.props.deleteBook} book={book} key={book._id} {...book} /> )}
        </ul>
      </div>
    )
  }
}

export default Catalogue;


