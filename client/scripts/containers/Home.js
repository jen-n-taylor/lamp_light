import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../components/globals/MainNav.js';
import Footer from '../components/globals/Footer.js';

class Home extends React.Component {
  render() {
    return (
      <div className="full-page-wrapper">
        <MainNav />
        <HomeIntro />
        <Footer />
      </div>
    )
  }
};

const HomeIntro = () => {
  return (
    <section className="wrapper">
      <div className="home">
        <div className="home__wrapper">
          <div>
            <img className="home__img" src="./assets/images/lightbulb.svg" alt="" />
          </div>
          <div className="home__header-wrapper">
            <h1 className="home__header">Lamp Light</h1>
            <p className="home__subtitle">A library catalogue for 
            avid readers</p>
            <div className="home__button-wrapper">
              <Link className="home__button home__button--catalogue" to={'/library'}>View Libraries</Link>
              <Link className="home__button home__button--login" to={'/login'}>Librarian Login</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Home;
