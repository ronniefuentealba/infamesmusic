import React from "react";
import Grid from '@material-ui/core/Grid';
import { Hello } from "./components/hello";
import { LinkItem } from "./components/link/link";
import img from "./assets/img/hermita.gif";
import { Navbar } from "./components/mainMenu/mainMenu";
import { Artwork } from "./components/artwork/artwork";

export class App extends React.Component {
  shouldComponentUpdate() {
    setTimeout
    console.log('shouldComponentUpdate');
  }
  render() {
    return <Grid>
      <Navbar></Navbar>
      <Hello compiler="TypeScript" framework="React" />
      <Grid>
        <img src={img} alt="Hermita" />
        <LinkItem url="http://www.infames.cl" text='infames'/>
      </Grid>
      <Artwork>Hola</Artwork>
      <Artwork></Artwork>
    </Grid>
  }
  componentDidMount() {
    console.log('componentDidMount');
    
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');

  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    
  }
}