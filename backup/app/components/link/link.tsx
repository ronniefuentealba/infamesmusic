import React from "react";
import PropTypes from 'prop-types';

export class LinkItem extends React.Component  {
  render() {
    return <a className="link" href={this.props.url}>{this.props.text}</a>
  }
}
LinkItem.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string
};