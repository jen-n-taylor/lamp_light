import React from 'react';
import SocialMedia from './SocialMedia.js';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="wrapper footer-wrapper">
          <div className="copyright">
            <p>Copyright Jen Taylor, 2017</p>
          </div>
          <SocialMedia />
        </div>
      </footer>
    )
  }
}

export default Footer;
