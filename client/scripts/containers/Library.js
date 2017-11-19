import React from 'react';
import MainNav from '../components/globals/MainNav.js';
import CatalogueHeader from '../components/CatalogueHeader';
import Catalogue from '../components/Catalogue';
import Footer from '../components/globals/Footer.js';


class Library extends React.Component {
  render() {
    return (
      <div>
        <MainNav />
        <CatalogueHeader />
        <Catalogue fetchBooks={this.props.fetchBooks} books={this.props.books} deleteBook={this.props.deleteBook}/>
        <Footer />
      </div>
    )
  }
};

export default Library;
