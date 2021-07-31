import React, { Component } from "react";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

import "modern-normalize";
import "./styles.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelClick = (e) => {
    const name = e.target.textContent;
    this.setState({ [name]: this.state[name] + 1 });
  };

  countTotal = () => {
    return Object.values(this.state).reduce((acc, i) => (acc += i), 0);
  };

  countPercentage = () => {
    return this.countTotal()
      ? Math.round((this.state.good / this.countTotal()) * 100)
      : 0;
  };

  render() {
    return (
      <>
        <Section title="Please Leave Feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handelClick}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotal() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotal}
              positivePercentage={this.countPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
