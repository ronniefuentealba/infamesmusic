import React from 'react';
import {NavLink} from 'react-router-dom';
import './SimpleMenu.scss';

const SimpleMenu = () => {
  return (
    <React.Fragment>
      <nav className="main-nav">
        <ul className="main-nav__menu-container">
          <li className="main-nav--menu-link menu-infames">
            <NavLink to="/Home">Infames</NavLink>
          </li>
          <li className="main-nav--menu-link menu-artists">
            <NavLink to="/Artists">Artistas</NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default SimpleMenu;
