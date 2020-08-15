import NavBar from "../navBar/navBar";
import navButtons from "../../config/buttons";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

import "./header.scss";



const Header = (props) => {
  return (
  <>
    <header >
      <NavBar navButtons={navButtons} />
    </header>
  </>
)};
  
export default Header;