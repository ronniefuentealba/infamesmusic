import React, { Component, ReactNode } from "react";

type Props = {
  children: ReactNode
}

export class Artwork extends Component<Props> {
  render() {
    return <div className="card">{this.props.children}</div>
  }
}