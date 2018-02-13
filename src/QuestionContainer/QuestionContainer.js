import React from 'react';
import PropTypes from 'prop-types';
import BackArrow from '../assets/prev.jpg';
import Answer from '../Answer/Answer';
import './QuestionContainer.css';

const QuestionContainer = ({ question, selectAnswer, goBack, allAnswers, score, refreshQuiz }) => (
  <div className="question-container">
    <div className="top-nav">
      {question.index > 0 &&
        <button className="back-button" onClick={() => goBack(question.index)}>
          <img src={BackArrow} alt="Back arrow" />
        </button>
      }
      {question.index < 4 && <div className="step">Step {question.index + 1} of 4</div>}
    </div>
    <div className="question-box">
      {question.index < 4 ?
        <div>
          <div>
          {question.question}
          </div>
          <div className="answers-container">
            {question.answers.map(answer => (<Answer
                key={answer.score}
                answer={answer}
                selectAnswer={selectAnswer}
                selected={allAnswers[question.index] && (allAnswers[question.index] === answer.score)}
              /> 
            ))}
          </div>
        </div> :
        <div className="score-box">
          <div>
            Your total score is { score }
          </div>
          <button className="refresh-button" onClick={() => refreshQuiz()}>
            Refresh the quiz
          </button>
        </div>
      }
    </div>
  </div>
);

QuestionContainer.propTypes = {
  question: PropTypes.shape({
    index: PropTypes.number,
    question: PropTypes.string,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        answer: PropTypes.string,
        score: PropTypes.number
      })
    )
  }).isRequired,
  selectAnswer: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  allAnswers: PropTypes.arrayOf(PropTypes.number),
  score: PropTypes.number,
  refreshQuiz: PropTypes.func.isRequired
}

export default QuestionContainer;