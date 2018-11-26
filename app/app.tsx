import React from "react";
import Grid from '@material-ui/core/Grid';
import { Hello } from "./components/hello";
import { LinkItem } from "./components/link/link";
import img from "./img/hermita.gif";
import { Navbar } from "./components/mainMenu/mainMenu";

export class App extends React.Component {
  render() {
    return <Grid>
      <Navbar></Navbar>
      <Hello compiler="TypeScript" framework="React" />
      <Grid>
        <img src={img} alt="Hermita" />
        <LinkItem url="http://www.infames.cl" text='infames'/>
      </Grid>
    </Grid>
  }
}