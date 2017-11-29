import React from 'react';

class EditBooks extends React.Component {
  constructor() {
    super();
    this.state = {
      totalBooks: 0,
    }
    this.countBooks = this.countBooks.bind(this);
  }
  countBooks() {
    fetch('/api/books/count')
    .then(resp => resp.json())
    .then(json => this.setState({totalBooks: json}))
  }
  componentDidMount() {
    this.countBooks();
  }
  render() {
    return(
      <div className="admin-view dashboard-view">
        <h1>Hello, Jen</h1>
        <p className="">You have 
          <span className="dashboard__total-books"> {this.state.totalBooks} </span> 
        books in your library.
        </p>
      </div>
    );
  }
}

export default EditBooks;
