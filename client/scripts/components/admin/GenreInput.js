import React from 'react';

class GenreInput extends React.Component {
  constructor() {
    super();
    this.state = {
      genre: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.onAddGenres = this.onAddGenres.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onAddGenres(e) {
    this.props.addGenres(this.state.genre);
    this.setState({genre: ''})
  }
  render(props) {
    return (
      <div>
        <label htmlFor="genre">Genre</label>
        <input id="genre" type="text" placeholder="" value={this.state.genre} name="genre" onChange={this.handleChange}/>
        <button type="button" onClick={this.onAddGenres}>Add genre</button>
        <div className="genre-list"> </div>
      </div>
    )
  }
}

export default GenreInput;
