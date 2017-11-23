import React from 'react';
import MainNav from '../components/globals/MainNav.js';
import Footer from '../components/globals/Footer.js';

class Login extends React.Component {
  render() {
    return (
      <div class="full-height-wrapper">
        <MainNav />

          <section className="wrapper">
            <div className="login">
              <div className="login__img-wrapper">
                <img className="login__img" src="./assets/images/lamp-tall.svg" alt="" />
              </div>

              <div className="login__wrapper">
                <h1 className="login__header">Login</h1>
                <form className="login__form">
                  <fieldset>
                    <label>Username</label>
                    <input type="text" placeholder="Enter your username" />
                  </fieldset>

                  <fieldset>
                    <label>Password</label>
                    <input type="password" placeholder="Enter your username" />
                  </fieldset>

                  <button type="submit">Login</button>
                </form>
              </div>
            </div>
          </section>

        <Footer />
      </div>
    )
  }
};

export default Login;
