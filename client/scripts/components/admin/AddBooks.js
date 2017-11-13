import React from 'react';
import AddBookForm from './AddBookForm';

class AddBooks extends React.Component {
  render() {
    return (
      <AddBookForm fetchBooks={this.props.fetchBooks} />
    );
  }
}

export default AddBooks;
