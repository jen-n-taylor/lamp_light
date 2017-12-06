import React from 'react';
import GenreInput from './GenreInput';
import ReactFilestack from 'filestack-react';

class AuthorInput extends React.Component {
  render() {
    return <input type="text" aria-describedby="author_input" placeholder="Author's name" onChange={this.props.updateAuthors} name={`author-${ this.props.index }`} />
  }
}

class AddBookForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      authors: [],
      checkedOut: '',
      publisher: '',
      published: '',
      language: '',
      genres: [],
      about: '',
      cover: '',
      coverUploadMessage: 'visuallyhidden',
      authorInputs: [],
      errors: {},
    }
    this.addAuthorInput = this.addAuthorInput.bind(this);
    this.updateAuthors = this.updateAuthors.bind(this);
    this.addGenres = this.addGenres.bind(this);
    this.removeGenres = this.removeGenres.bind(this);
    this.onUploadSuccess = this.onUploadSuccess.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  addAuthorInput(e) {
    const authorInputs = this.state.authorInputs.concat(AuthorInput);
    this.setState({
      authorInputs
    });
  }
  updateAuthors(author) {
    this.setState({
      authors: this.state.authors.concat(author),
    })
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
      coverUploadMessage: "",
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
    .then((res) => {
      if (res.ok) {
        this.props.fetchBooks();
      } else {
        res.json().then(json => this.setState({
          errors: json.errors
        }))
      }
    });
    this.refs.form.reset()
    this.setState({
      coverUploadMessage: 'visuallyhidden',
    })
  }
  render() {
    const authorInputs = this.state.authorInputs.map((Element, index) => {
      var index = index + 1; 
      return <Element key={ index } index={ index } updateAuthors={this.updateAuthors} />
    } )
    return (
      <form ref="form" className="add-books-form" onSubmit={this.handleSubmit}>
        <fieldset>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" placeholder="" onChange={this.handleChange} name="title" />
          {
            this.state.errors.title && 
            <p>Please provide a title.</p>
          }
        </fieldset>

        <fieldset>
          <label htmlFor="author" id="author_input">Author</label>
         <AuthorInput index={0} onChange={this.updateAuthors} />
          {
            this.state.errors.author && 
            <p>Please add the author or editor's name.</p>
          }
          { authorInputs }
          <button type="button" onClick={this.addAuthorInput}>Add author</button>
        </fieldset>
        
        <fieldset>
          <label htmlFor="about">About</label>
          <textarea id="about" type="text" placeholder="" rows="5" cols="30" onChange={this.handleChange} name="about"/>
          {
            this.state.errors.about && 
            <p>Please provide a synopsis.</p>
          }
        </fieldset>

        <fieldset>
          <label htmlFor="publisher">Publisher</label>
          <input id="publisher" type="text" placeholder="" onChange={this.handleChange} name="publisher"/>
          {
            this.state.errors.publisher && 
            <p>Please provide a publisher.</p>
          }
        </fieldset>

        <fieldset>
          <label htmlFor="published">Year Published</label>
          <input id="published" type="text" placeholder="" onChange={this.handleChange} name="published" />
          {
            this.state.errors.published && 
            <p>Please provide the year the book was published.</p>
          }
        </fieldset>

        <fieldset>
          <label htmlFor="language">Language</label>
          <input id="language" type="text" placeholder="" onChange={this.handleChange} name="language"/>
          {
            this.state.errors.language && 
            <p>Please provide the language your edition of the book is published in.</p>
          }
        </fieldset>

        <fieldset>
          <GenreInput addGenres={this.addGenres} removeGenres={this.removeGenres} genres={this.state.genres} />
          {
            this.state.errors.genres ? 
            <p>Please provide at least one genre.</p> : null
          }
        </fieldset>

        <fieldset>
          <ReactFilestack
            apikey={"AedMFH3FtTWOpmG9xu1nlz"}
            buttonText="Upload cover image"
            buttonClass="addBooks-form__button"
            onSuccess={this.onUploadSuccess}
            onChange={this.handleChange}
            name="cover"
          />
          {
            this.state.errors.cover && 
            <p>Please upload an image of the cover.</p>
          }
          <p id="successMessageCover" className={this.state.coverUploadMessage}>Image uploaded!</p>
        </fieldset>

        <button className="addBooks-form__button" type="submit">Add book</button>
      </form>
    );
  }
}

export default AddBookForm;
