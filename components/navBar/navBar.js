import Link from "next/link";
import { withRouter } from "next/router";

import "./navBar.scss";


const NavButton = props => (
  <Link href={props.path}>
  <a>
    <div
      className={`NavButton ${
        props.router.pathname === props.path ? "active" : ""
      }`}
    >
      <span className="Label">{props.label}</span>
    </div>
  </a>
  </Link>
);

const NavBar = props => (
  <nav className="NavBar">
    {props.navButtons.map(button => (
      <NavButton
        key={button.path}
        path={button.path}
        label={button.label}
        position={button.position}
        router={props.router}
      />
    ))}
  </nav>
);

export default withRouter(NavBar);