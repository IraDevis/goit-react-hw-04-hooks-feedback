// import { Component } from "react";
import { useState } from "react";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

import "modern-normalize";
import "./styles.css";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (e) => {
    const text = e.target.textContent;

    switch (text) {
      case "good":
        setGood((prev) => prev + 1);
        break;

      case "neutral":
        setNeutral((prev) => prev + 1);
        break;

      case "bad":
        setBad((prev) => prev + 1);
        break;

      default:
        break;
    }
  };

  const countTotal = () => {
    const total = [good, neutral, bad];
    return total.reduce((acc, i) => (acc += i), 0);
  };

  const countPercentage = () => {
    return countTotal() ? Math.round((good / countTotal()) * 100) : 0;
  };

  return (
    <>
      <Section title="Please Leave Feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleClick}
        />
      </Section>

      <Section title="Statistics">
        {countTotal() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal}
            positivePercentage={countPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = (e) => {
//     const name = e.target.textContent;
//     this.setState({ [name]: this.state[name] + 1 });
//   };

// countTotal = () => {
//   return Object.values(this.state).reduce((acc, i) => (acc += i), 0);
// };

// countPercentage = () => {
//   return this.countTotal()
//     ? Math.round((this.state.good / this.countTotal()) * 100)
//     : 0;
// };

//   render() {
// return (
//   <>
//     <Section title="Please Leave Feedback">
//       <FeedbackOptions
//         options={this.state}
//         onLeaveFeedback={this.handleClick}
//       />
//     </Section>

//     <Section title="Statistics">
//       {this.countTotal() > 0 ? (
//         <Statistics
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//           total={this.countTotal}
//           positivePercentage={this.countPercentage}
//         />
//       ) : (
//         <Notification message="No feedback given" />
//       )}
//     </Section>
//   </>
// );
//   }
// }

// export default App;
