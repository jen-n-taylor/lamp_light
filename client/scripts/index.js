import React from 'react';
import ReactDOM from 'react-dom';

import Home from './containers/Home';
import Library from './containers/Library';
import AddBooks from './containers/AddBooks';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
    }
    this.fetchBooks = this.fetchBooks.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }
  render() {
    return (
      <div>
        <Home />
        <AddBooks fetchBooks={this.fetchBooks} />
        <Library fetchBooks={this.fetchBooks} books={this.state.books} deleteBook={this.deleteBook} />
      </div>
    )
  };
  componentDidMount() {
    this.fetchBooks();
  };
  fetchBooks() {
    fetch('/api/books')
      .then(resp => resp.json())
      .then(json => this.setState({ books: json }));
  }
  deleteBook(id) {
    fetch(`/api/books/${id}`, {
      method: 'DELETE',
    })
    .then(() => this.fetchBooks());
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
