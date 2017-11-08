import React from 'react';
import MainNav from './MainNav.js';
import CatalogueHeader from './catalogue/CatalogueHeader';
import Catalogue from './catalogue/Catalogue';
import Footer from './Footer.js';


class Library extends React.Component {
  render() {
    return (
      <div>
        <MainNav />
        <CatalogueHeader />
        <Catalogue fetchBooks={this.props.fetchBooks} books={this.props.books} />
        <Footer />
      </div>
    )
  }
};

export default Library;
