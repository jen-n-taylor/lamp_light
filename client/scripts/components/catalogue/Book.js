import React from 'react';

const Book = (props) => {
  return(
    <div className="wrapper book">
      <div className="book__image">
        <img src="{props.cover}" alt="" />
      </div>
      <div className="book__info">
        <p className="title">{props.title}</p>
        <p className="author">{props.author}</p>
        <p className="publisher">{props.publisher}, {props.published}</p>
        <p className="about">{props.about}</p>
      </div>
    </div>
  )
}

export default Book;
