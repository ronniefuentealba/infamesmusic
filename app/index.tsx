import * as React from "react";
import * as ReactDOM from "react-dom";

import './styles/main.scss'
import { Hello } from "./common/components/hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("app")
);

module.hot.accept();