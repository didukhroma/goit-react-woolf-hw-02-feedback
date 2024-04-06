import { Component } from 'react';

import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistics from 'components/Statistics';

import { StyledMainTitle } from './App.styled';
import Notification from 'components/Notification';

export default class App extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  leaveFeedback = propName => {
    this.setState(prevState => ({
      [propName]: prevState[propName] + this.props.step,
    }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    if (!good) return 0;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <StyledMainTitle>Cafe Expresso</StyledMainTitle>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              {...this.state}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
