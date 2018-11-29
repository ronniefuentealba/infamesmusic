import React from "react";
import ReactDOM from "react-dom";
require('typeface-roboto');
import './styles/main.scss';
import { App } from './app';

ReactDOM.render(
    <App />,
    document.getElementById("app")
);

module.hot.accept();