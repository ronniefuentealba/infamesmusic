import NavBar from "../navBar/navBar";
import navButtons from "../../config/buttons";
import "./header.scss";

const Header = () => {
  return (
  <>
    <header >
      <NavBar navButtons={navButtons} />
    </header>
  </>
)};
  
export default Header;