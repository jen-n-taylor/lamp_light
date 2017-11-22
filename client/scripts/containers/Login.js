import React from 'react';
import Footer from '../components/globals/Footer.js';
import MainNav from '../components/globals/MainNav.js';

class Home extends React.Component {
  render() {
    return (
      <div class="full-height-wrapper">
        <MainNav />

          <section className="wrapper">
            <div className="login">
              <div>
                <img className="login__img" src="./assets/images/lamp-tall.svg" alt="" />
              </div>
            </div>
          </section>

        <Footer />
      </div>
    )
  }
};

export default Login;
