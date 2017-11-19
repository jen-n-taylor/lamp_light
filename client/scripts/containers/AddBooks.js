import React from 'react';
import AddBookForm from '../components/AddBookForm';

class AddBooks extends React.Component {
  render() {
    return (
      <AddBookForm fetchBooks={this.props.fetchBooks} />
    );
  }
}

export default AddBooks;
