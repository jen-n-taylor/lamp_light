import React from 'react';
import { Route } from 'react-router-dom';
import MainNav from '../components/globals/MainNav.js';
import Catalogue from '../components/Catalogue';

class Library extends React.Component {
  constructor() {
    super();  
  }
  
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

          <div className="catalogue-search">
            <div className="wrapper">
              <h2>Search by</h2>

              <div id="tabbed-search">
                <ul className="tabbed-search__list">
                  <li>
                    <button type="button" ref="tab" className="mostRecent" onClick={this.openTab}>Recently Added</button>
                  </li>
                  <li>
                    <button type="button" ref="tab" className="title" onClick={this.openTab}>Title</button>
                  </li>
                  <li>
                    <button type="button" ref="tab" className="author" onClick={this.openTab}>Author</button>
                  </li>
                  <li>
                    <button type="button" ref="tab" className="genre" onClick={this.openTab}>Genre</button>
                  </li>
                  
                </ul>
              </div>

              <div ref="panels">
                <fieldset id="title" ref="title">
                  <label htmlFor="titleSearch" >Search by title:</label>
                  <input id="titleSearch" className="search-input"/>
                  <button type="submit">Search</button>
                </fieldset>

                <fieldset id="author" ref="author">
                  <label htmlFor="authorSearch">Search by author:</label>
                  <input id="authorSearch" className="search-input"/>
                  <button type="submit">Search</button>
                </fieldset>

                <fieldset id="genre" ref="genre">
                  <label htmlFor="genreSearch">Search by genre:</label>
                  <input id="genreSearch"className="search-input"/>
                  <button type="submit">Search</button>
                </fieldset>
              </div>
            </div>
          </div>
        
          <Catalogue fetchBooks={this.props.fetchBooks} books={this.props.books} deleteBook={this.props.deleteBook}/>
        </section>
      
      </div>
    )
  }
};

export default Library;
