import React from 'react';
import PropTypes from 'prop-types';

import { Button, ControlsSection } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ControlsSection>
    {options.map((option, id) => {
      return (
        <Button
          key={id}
          type="button"
          name={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </Button>
      );
    })}
  </ControlsSection>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
