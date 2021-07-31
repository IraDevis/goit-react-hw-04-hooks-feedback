// import { Component } from "react";
import PropTypes from "prop-types";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total()}</li>
        <li>Positive feedback: {positivePercentage()}%</li>
      </ul>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

// class Statistics extends Component {
// static propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.func.isRequired,
//   positivePercentage: PropTypes.func.isRequired,
// };

//   render() {
// return (
//   <>
//     <ul>
//       <li>Good: {this.props.good}</li>
//       <li>Neutral: {this.props.neutral}</li>
//       <li>Bad: {this.props.bad}</li>
//       <li>Total: {this.props.total()}</li>
//       <li>Positive feedback: {this.props.positivePercentage()}%</li>
//     </ul>
//   </>
// );
//   }
// }

// export default Statistics;
