import { Parallax } from 'react-scroll-parallax';
import NavBar from "../navBar/navBar";
import navButtons from "../../config/buttons";

import "./header.scss";

const Header = props => (
  <>

    <header>
      <div id="logoWrapper">
      <Parallax y={[90, 0]}  tagOuter="figure4">
        <h1><span>INFAMES<br/>Music</span></h1>
      </Parallax>
      </div>
      <NavBar navButtons={navButtons} />
    </header>
  </>
);
  
export default Header;