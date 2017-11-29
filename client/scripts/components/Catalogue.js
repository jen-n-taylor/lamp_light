import React from 'react';
import Book from './Book';
import sortBy from 'lodash/sortBy';

class Catalogue extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'mostRecent',
    }
    this.mostRecentFilter = this.mostRecentFilter.bind(this);
  }

  mostRecentFilter() {
    let recentlyAdded = sortBy(this.props.books, ['update']).reverse();
    recentlyAdded = recentlyAdded.slice(0,3);
    return recentlyAdded;
  }

  render() {
    let books;
    if (this.state.filter === 'mostRecent') {
      books = this.mostRecentFilter();
    }

    return (
      <div className="catalogue-content">
        <div className="wrapper catalogue-wrapper">
          { books.map(book => <Book fetchBooks={this.props.fetchBooks} deleteBook={this.props.deleteBook} book={book} key={book._id} {...book} /> )}
        </div>
      </div>
    )
  }
}

export default Catalogue;


