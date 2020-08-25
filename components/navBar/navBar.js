import Link from "next/link";
import { withRouter } from "next/router";
import {OverlayMenu} from './../index';
import './navBar.scss'

const NavButton = props => {
  return (
    <>
      <Link href={props.path}>
        <a className={`${'navItem'} ${
              props.router.pathname === props.path ? "active" : ""
            }`}>
            <span className="Label">{props.label}</span>
        </a>
      </Link>
      <OverlayMenu/>
    </>
)};

const NavBar = props =>{
  return (
    <nav className={'navWrapper'}>
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
  )
};

export default withRouter(NavBar);