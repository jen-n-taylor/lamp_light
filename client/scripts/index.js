import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import About from './containers/About';
import Library from './containers/Library';
import Admin from './containers/Admin';

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
      <Router>
        <div>
          <Route
            exact
            path="/"
            component={Home}
          />

          <Route
            exact
            path="/login"
            component={Login}
          />

          <Route
            exact
            path="/about"
            render={() => <About /> }
          />

          <Route
            path="/library"
            render={() => <Library fetchBooks={this.fetchBooks}  books={this.state.books} deleteBook={this.deleteBook} /> }
          />

          <Route
            path="/admin"
            render={() => <Admin fetchBooks={this.fetchBooks} /> }
          />

        </div>
      </Router>
    )
  };
  componentDidMount() {
    this.fetchBooks();
  };
  fetchBooks() {
    fetch('/api/books')
      .then(resp => resp.json())
      .then(json => this.setState({ books: json }))
  }
  deleteBook(id) {
    fetch(`/api/books/${id}`, {
      method: 'DELETE',
    })
    .then(() => this.fetchBooks());
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
