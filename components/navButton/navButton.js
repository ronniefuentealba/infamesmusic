import Link from "next/link";
import { withRouter } from "next/router";

import "./navButton.scss";

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

export default withRouter(NavButton);