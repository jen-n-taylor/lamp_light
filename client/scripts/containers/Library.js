import React from 'react';
import MainNav from '../components/globals/MainNav.js';
import Catalogue from '../components/Catalogue';


class Library extends React.Component {
  render() {
    return (
      <div>
        <MainNav />
        <div className="wrapper">
          <div className="catalogue-header">
            <h1>38 Niagara Library</h1>
            <h2>Curator: Jen Taylor</h2>
          </div>
        
          <Catalogue fetchBooks={this.props.fetchBooks} books={this.props.books} deleteBook={this.props.deleteBook}/>
        </div>

      
      </div>
    )
  }
};

export default Library;
