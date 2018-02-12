import React from 'react';
import PropTypes from 'prop-types';
import './Answer.css';

const Answer = ({ answer, selectAnswer, selected }) => (
  <button className={`answer-button ${selected ? 'selected': ''}`} onClick={() => selectAnswer(answer)}>
    {answer.answer}
  </button>
);

Answer.propTypes = {
  answer: PropTypes.shape({
        answer: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired
      }).isRequired,
  selectAnswer: PropTypes.func.isRequired,
  selected: PropTypes.bool
}

export default Answer;