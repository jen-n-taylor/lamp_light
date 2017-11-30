import React from 'react';
import MainNav from '../components/globals/MainNav.js';
import Footer from '../components/globals/Footer.js';


class BookSingle extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      authorFirst: "",
      authorLast: "",
      genres: [],
    }
  }
  componentDidMount() {
    fetch(`/api/books/${this.props.match.params.bookId}`, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(book => {
      this.setState(book);
    });
  }
  render() {
    return (
      <div>
        <pre>
          {JSON.stringify(this.state, null, 3)}
        </pre>

        <div className="book__info">
              <p className="title">{this.state.title}</p>
              <p className="author">{this.state.authorFirst} {this.state.authorLast}</p>
              <p className="genre">{this.state.genres}</p>
        </div>
      </div>
    )
  }
}

export default BookSingle;