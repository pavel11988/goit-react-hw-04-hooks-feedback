import React from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistic from './Statistic/Statistic';
import Notification from './Notification/Notification';

import { Container } from './App.styled';
import Section from './Section/Section';
import { useState, useEffect } from 'react';

// class App extends React.Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   state = {
//     good: this.props.initialValue,
//     neutral: this.props.initialValue,
//     bad: this.props.initialValue,
//   };

//   handleIncrement = name => {
//     this.setState(prevState => {
//       return {
//         ...prevState,
//         [name]: prevState[name] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.bad + this.state.neutral;
//   };

//   countPositiveFeedbackPercentage = total => {
//     return Math.round((this.state.good / total) * 100);
//   };

//   render() {
//     const options = ['good', 'neutral', 'bad'];
//     const total = this.countTotalFeedback();
//     const positiveFeedback = this.countPositiveFeedbackPercentage(total);
//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.handleIncrement}
//           />
//         </Section>

//         <Section title="Statistic">
//           {total > 0 ? (
//             <Statistic
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={total}
//               positivePercentage={positiveFeedback}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }
export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);

  useEffect(() => {
    setTotal(good + neutral + bad);
    setPositiveFeedback(Math.round((good / total) * 100));
  }, [good, neutral, bad, total]);

  const handleIncrement = name => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const options = ['good', 'neutral', 'bad'];

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleIncrement} />
      </Section>
      <Section title="Statistic">
        {total > 0 ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
}
