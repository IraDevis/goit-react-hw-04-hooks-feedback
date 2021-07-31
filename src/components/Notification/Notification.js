// import { Component } from "react";
import PropTypes from "prop-types";

export default function Notification({ message }) {
  return <p>{message}</p>;
}

Notification.defaultProps = {
  message: "",
};

Notification.propTypes = {
  message: PropTypes.string,
};

// class Notification extends Component {
// static defaultProps = {
//   message: "",
// };
//   static propTypes = {
//     message: PropTypes.string,
//   };

//   render() {
//     return <p>{this.props.message}</p>;
//   }
// }

// export default Notification;
