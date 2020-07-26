import NavButton from "../navButton/navButton";
import "./navBar.scss";

const NavBar = props => (
  <div className="NavBar">
    {props.navButtons.map(button => (
      <NavButton
        key={button.path}
        path={button.path}
        label={button.label}
        position={button.position}
      />
    ))}
  </div>
);

export default NavBar;