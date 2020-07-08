import AppBar from '@material-ui/core/AppBar';
import { NavLink } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import {SimpleMenu} from '../SimpleMenu';
import './NavBar.scss';
import logo from '../../images/logo--infames.jpg';

const NavBar = () => {
  return (
    <AppBar className="navbar" position="static">
      <Toolbar>
      <NavLink to="/Home">
        <h1 className="navbar--logo">
          <img src={logo} alt="Infames" width="100%" />
        </h1>
      </NavLink>
        <SimpleMenu />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './NavBar.scss'

// const NavBar = () => {
//   return (
//     <nav className="main-nav">
//       <h5>NavBar</h5>
//       <ul className="menu">
//         <li className="menu-infames"><NavLink to="/Home">Infames</NavLink></li>
//         <li className="menu-artists"><NavLink to="/Artists">Artistas</NavLink></li>
//         <li className="menu-discs"><NavLink to="/Discs">Discos</NavLink></li>
//         <li className="menu-videos"><NavLink to="/Videos">Videos</NavLink></li>
//         <li className="menu-store"><NavLink to="/Store ">Tienda</NavLink></li>
//       </ul>
//       <hr />
//     </nav>
//   )
// }

// export default NavBar;
