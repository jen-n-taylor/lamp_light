import React from 'react';
import ReactFilestack from 'filestack-react';

class AddBookForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      checkedOut: '',
      publisher: '',
      published: '',
      language: '',
      genre: '',
      about: '',
      cover: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onUploadSuccess = this.onUploadSuccess.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onUploadSuccess(success) {
    const url = success.filesUploaded[0].url;
    this.setState({
      cover: url,
    });
  }
  handleSubmit() {
    e.preventDefault();
    const book = Object.assign({}, this.state);
    fetch('/api/books', {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(() => this.props.fetchMovies());
  }
  render() {
    return (
      <form className="wrapper" onSubmit={this.handleSubmit}>
        <h2>Add a book to your library</h2>

        <label htmlFor="title">Title</label>
        <input id="title" type="text" placeholder=""  />

        <label htmlFor="author">Author</label>
        <input id="author" type="text" placeholder="" />

        <label htmlFor="about">About</label>
        <input id="about" type="text" placeholder="" />

        <label htmlFor="publisher">Publisher</label>
        <input id="publisher" type="text" placeholder="" />

        <label htmlFor="published">Published</label>
        <input id="published" type="text" placeholder="" />

        <label htmlFor="language">Language</label>
        <input id="language" type="text" placeholder="" />

        <label htmlFor="genre">Genre</label>
        <input id="genre" type="text" placeholder="" />
        <div className="genre-list"> </div>

        <ReactFilestack
          apikey={"AedMFH3FtTWOpmG9xu1nlz"}
          buttonText="Upload cover image"
          buttonClass="addBooks-form__button"
          onSuccess={this.onUploadSuccess}
        />

      <button className="addBooks-form__button">Add book</button>
      </form>
    );
  }
}

export default AddBookForm;
