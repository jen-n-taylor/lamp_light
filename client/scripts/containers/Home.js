import React from 'react';
import Footer from '../components/globals/Footer.js';
import MainNav from '../components/globals/MainNav.js';

class Home extends React.Component {
  render() {
    return (
      <div class="full-height-wrapper">
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
        <div className="home-wrapper">
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
        </div>
      </div>
    </section>

  )
}

export default Home;
