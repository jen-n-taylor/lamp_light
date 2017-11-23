import React from 'react';

class Book extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return(
      <div className="wrapper book">
        <div className="book__image">
          <img className="cover" src={this.props.cover} alt="" />
        </div>
        <div className="book__info">
          <p className="title">{this.props.title}</p>
          <p className="author">{this.props.author}</p>
          <p className="publisher">{this.props.publisher}, {this.props.published}</p>
          <p className="about">{this.props.about}</p>
        </div>
        <button type="submit" className="book__delete-button" onClick={() => this.props.deleteBook(this.props._id)}>Remove</button>
      </div>
    )}
}

export default Book;
