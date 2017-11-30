import React from 'react';
import _ from 'lodash';

class GenreInput extends React.Component {
  constructor() {
    super();
    this.state = {
      genre: ''
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
    let newGenre = _.startCase(this.state.genre);
    console.log(newGenre);
    this.props.addGenres(newGenre);
    this.setState({genre: ''})
  }
  render(props) {
    return (
      <div>
        <label htmlFor="genre">Genre</label>
        
        <input id="genre" type="text" placeholder="" value={this.state.genre} name="genre" onChange={this.handleChange}/>
        
        <button className="addBooks-form__button--genre" type="button" onClick={this.onAddGenres}>Add genre</button>
        
        <div className="genre-list__wrapper">
          <ul className="genre-list__list">
            {this.props.genres.map((item, i) =>
              <li className="genre-list__item" key={i}>{item} <button type="button" className="genre-list__item--delete" onClick={() => this.props.removeGenres(item)}>x</button>
              </li>)}
          </ul>
        </div>
      </div>
    )
  }
}

export default GenreInput;
