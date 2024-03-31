import { Component } from 'react';

import Section from 'components/Section';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';

class Feedback extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  leaveFeedback(propName) {
    this.setState(prevState => ({ [propName]: prevState[propName] + 1 }));
  }
  //   leaveFeedback = propName => {
  //     this.setState(prevState => ({ [propName]: prevState[propName] + 1 }));
  //   };

  countTotalFeedback() {
    const { good, bad, neutral } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    if (!good) return 0;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100);
  }

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <h1>Cafe Expresso</h1>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.leaveFeedback.bind(this)}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            {...this.state}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </>
    );
  }
}

export default Feedback;
