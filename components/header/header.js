import Link from "next/link";
import NavBar from "../navBar/navBar";
import navButtons from "../../config/buttons";

import "./header.scss";

const Header = props => (
  <>

    <header>
      <NavBar navButtons={navButtons} />
    </header>
  </>
);
  
export default Header;