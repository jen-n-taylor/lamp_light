import React from 'react';
import AddBookForm from '../components/AddBookForm';

class AddBooks extends React.Component {
  render() {
    return (
      <div className="admin-view dashboard-view add-books-view">
        <h1>Hello, Jen</h1>
        <p className="">Fill out the fields below to add a book.</p>
        <AddBookForm fetchBooks={this.props.fetchBooks} />
      </div>
    );
  }
}

export default AddBooks;
