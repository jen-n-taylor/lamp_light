import React from 'react';
import { Link } from 'react-router-dom';

class Book extends React.Component {
  constructor() {
    super();
    this.state = {
      genre: ''
    }
  }
  render() {
    // const genres = this.props.genres.map(function(i, item) {
    //   return <li><Genre key={i} genre={item} /></li>
    // });

    return(
      <li className="book-wrapper">
        <img className="book__image" src={this.props.cover} alt="" />
        <div className="book__info">
          <Link to={`/library/${this.props._id}`} >
            <p className="title">{this.props.title}</p>
          </Link>
          <p className="author">{this.props.author.map}</p>

          <ul className="genres">
            {this.props.genres.map((genre, i) => 
            <li className="genres__link" key={i}> <Link to={`/library`}>{`${genre}`}</Link></li>)}
          </ul>
        </div>
      </li>
    )
  }
}

export default Book;
