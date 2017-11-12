import React from 'react';
import GenreInput from './GenreInput';
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
      genres: [],
      about: '',
      cover: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.addGenres = this.addGenres.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onUploadSuccess = this.onUploadSuccess.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  addGenres(genre) {
    this.setState({
      genres: this.state.genres.concat(genre),
    })
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
        <textarea id="about" type="text" placeholder="" rows="5" cols="30"/>

        <label htmlFor="publisher">Publisher</label>
        <input id="publisher" type="text" placeholder="" />

        <label htmlFor="published">Year Published</label>
        <input id="published" type="text" placeholder="" />

        <label htmlFor="language">Language</label>
        <input id="language" type="text" placeholder="" />

        <GenreInput addGenres={this.addGenres} />

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
