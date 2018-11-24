import * as React from "react";
import * as ReactDOM from "react-dom";
import styles from './styles/main.scss';

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TS" framework="React" />,
    document.getElementById("app")
);

module.hot.accept();