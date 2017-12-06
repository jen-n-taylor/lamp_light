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
        
      </div>
    );
  }
}

export default EditBooks;
