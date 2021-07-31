import React, { Component } from "react";
import PropTypes from "prop-types";

class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <>
        <section>
          <h2>{this.props.title}</h2>
          {this.props.children}
        </section>
      </>
    );
  }
}

export default Section;
