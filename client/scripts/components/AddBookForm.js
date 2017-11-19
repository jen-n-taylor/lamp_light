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
    this.removeGenres = this.removeGenres.bind(this);
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
  removeGenres(genreToRemove) {
    const newGenreArray = this.state.genres.filter(genre => genre !== genreToRemove);
    this.setState({
      genres: newGenreArray,
    })
  }
  onUploadSuccess(success) {
    const url = success.filesUploaded[0].url;
    this.setState({
      cover: url,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const book = Object.assign({}, this.state);
    fetch('/api/books', {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(() => this.props.fetchBooks());
  }
  render() {
    return (
      <form className="wrapper" onSubmit={this.handleSubmit}>
        <h2>Add a book to your library</h2>

        <label htmlFor="title">Title</label>
        <input id="title" type="text" placeholder="" onChange={this.handleChange} name="title" />

        <label htmlFor="author">Author</label>
        <input id="author" type="text" placeholder="" onChange={this.handleChange} name="author"/>

        <label htmlFor="about">About</label>
        <textarea id="about" type="text" placeholder="" rows="5" cols="30" onChange={this.handleChange} name="about"/>

        <label htmlFor="publisher">Publisher</label>
        <input id="publisher" type="text" placeholder="" onChange={this.handleChange} name="publisher"/>

        <label htmlFor="published">Year Published</label>
        <input id="published" type="text" placeholder="" onChange={this.handleChange} name="published" />

        <label htmlFor="language">Language</label>
        <input id="language" type="text" placeholder="" onChange={this.handleChange} name="language"/>

        <GenreInput addGenres={this.addGenres} removeGenres={this.removeGenres} genres={this.state.genres} />

        <ReactFilestack
          apikey={"AedMFH3FtTWOpmG9xu1nlz"}
          buttonText="Upload cover image"
          buttonClass="addBooks-form__button"
          onSuccess={this.onUploadSuccess}
          onChange={this.handleChange}
          name="cover"
        />

      <button className="addBooks-form__button" type="submit">Add book</button>
      </form>
    );
  }
}

export default AddBookForm;
