import React from "react";

export interface LinkItemProps { url: string; text: string; }

export class LinkItem extends React.Component<LinkItemProps, {}>  {
  render() {
    return <a className="link" href={this.props.url}>{this.props.text}</a>
  }
}