import React from 'react';
import MainNav from '../components/globals/MainNav.js';
import Footer from '../components/globals/Footer.js';

class About extends React.Component {
  render() {
    return (
      <div class="full-height-wrapper">
        <MainNav />
        <section className="wrapper">
          <div className="about">
            <div className="about__wrapper">
            <h1 className="about__header">What is Lamp Light?</h1>
              <p>Paragraph text. Body copy is 16px. Cras justo odio,dapibus ac facilisis in. Egestas eget quam. Maecenas faucibus mollis interdum maecenas faucibus. Cras mattis consectetur purus sit amet.</p>
          
              <h2>Credits</h2>

              <p>Paragraph text. Body copy is 16px. Cras justo odio dapibus ac facilisis in. Egestas eget quam. Maecenas faucibus mollis interdum maecenas faucibus. Cras mattis consectetur purus sit amet.</p>

              <p>lightbulb by Martyn Jasinski from the Noun Project<a href="https://thenounproject.com/search/?q=lightbulb&i=1148269">thenounproject.com/search/?q=lightbulb&i=1148269</a></p>
              <p>Floor Lamp by Olga from the Noun Project, <a href="https://thenounproject.com/olgamur_2015/collection/hand-drawn/?i=1197603">https://thenounproject.com/olgamur_2015/collection/hand-drawn/?i=1197603</a></p>
      
              <p>Desk Lamp by Olga from the Noun Project<a href="https://thenounproject.com/olgamur_2015/collection/hand-drawn/?i=1228137">thenounproject.com/olgamur_2015/collection/hand-drawn/?i=1228137</a></p>
            </div>

            <div>
              <img className="about__img" src="./assets/images/table-lamp.svg" />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default About;
