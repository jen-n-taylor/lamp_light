import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => {
  return(
    <div className="main-nav">
      <div className="main-nav__wrapper wrapper">
        <p className="main-nav__heading">Lamp Light</p>
        <nav className="main-nav__nav">
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default MainNav;
