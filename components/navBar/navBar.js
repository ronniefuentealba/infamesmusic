import NavButton from "../navButton/navButton";
import "./navBar.scss";

const NavBar = props => (
  <nav className="NavBar">
    {props.navButtons.map(button => (
      <NavButton
        key={button.path}
        path={button.path}
        label={button.label}
        position={button.position}
      />
    ))}
  </nav>
);

export default NavBar;