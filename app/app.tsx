import React from "react";
import Grid from '@material-ui/core/Grid';
import { Hello } from "./components/hello";
import { LinkItem } from "./components/link/link";

export class App extends React.Component {
  render() {
    return <Grid>
      <Hello compiler="TypeScript" framework="React" />
      <Grid>
        <LinkItem url="http://www.infames.cl" text='infames'/>
      </Grid>
    </Grid>
  }
}