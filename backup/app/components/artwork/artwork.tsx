import React, { Component, ReactNode } from "react";
import { Grid } from "@material-ui/core";

type Props = {
  children: {
    media: ReactNode
    icon: ReactNode

  }
}

export class Artwork extends Component<Props> {
  render() {
    return <Grid className="artwork-container">
      <Grid className="artwork-pic">{media}</Grid>
      <Grid className="artwork-content"></Grid>
      <Grid></Grid>
      </Grid>
  }
}