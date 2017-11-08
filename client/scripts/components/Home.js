import React from 'react';
import Footer from './Footer.js';
import MainNav from './MainNav.js';

class Home extends React.Component {
  render() {
    return (
      <div>
        <MainNav />
        <HomeIntro />
        <Footer />
      </div>
    )
  }
};

const HomeIntro = () => {
  return (
    <div className="wrapper">
      <section className="home">
        <div>
          <img className="home__img" src="./assets/images/lightbulb.svg" alt="" />
        </div>
        <div className="home__header-wrapper">
          <h1 className="home__header">Lamp Light</h1>
          <p className="home__subtitle">A library catalogue for avid readers</p>
          <div className="home__button-wrapper">
            <button className="home__catalogue-button">View Catalogue</button>
            <button className="home__login-button">Login</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;
