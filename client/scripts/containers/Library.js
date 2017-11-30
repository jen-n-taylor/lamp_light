import React from 'react';
import { Route } from 'react-router-dom';
import MainNav from '../components/globals/MainNav.js';
import Catalogue from '../components/Catalogue';


class Library extends React.Component {
  render() {
    return (
      <div>
        <MainNav />
        <section>
          <div className="catalogue-header">
            <div className="wrapper">
              <h1>38 Niagara Library</h1>
              <h2>Curator: Jen Taylor</h2>
            </div>
          </div>
        
          <Catalogue fetchBooks={this.props.fetchBooks} books={this.props.books} deleteBook={this.props.deleteBook}/>
        </section>
      
      </div>
    )
  }
};

export default Library;
