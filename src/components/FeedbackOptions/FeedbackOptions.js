// import { Component } from "react";
import PropTypes from "prop-types";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {Object.keys(options).map((option) => (
        <button key={option} onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

// class FeedbackOptions extends Component {
// static propTypes = {
//   options: PropTypes.object.isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

//   render() {
// return (
//   <>
//     {Object.keys(this.props.options).map((option) => (
//       <button key={option} onClick={this.props.onLeaveFeedback}>
//         {option}
//       </button>
//     ))}
//   </>
// );
//   }
// }
// export default FeedbackOptions;
