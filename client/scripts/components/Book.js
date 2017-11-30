import React from 'react';
import { Link } from 'react-router-dom';

class Book extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return(
      <div>
        <Link to={`/library/${this.props._id}`} >
          <div className="book-wrapper">
            <div className="book__image">
              <img className="cover" src={this.props.cover} alt="" />
            </div>
            <div className="book__info">
              <p className="title">{this.props.title}</p>
              <p className="author">{this.props.author}</p>
              <p className="publisher">{this.props.publisher}, {this.props.published}</p>
              <p className="about">{this.props.about}
              </p>
              <p className="genre">{this.props.genres}</p>

            </div>
            
          </div>
        </Link>
      </div>
    )
  }
}

export default Book;
