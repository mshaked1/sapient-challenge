import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import QuestionContainer from '../QuestionContainer/QuestionContainer';
import { selectAnswer, goBack, refreshQuiz } from '../../Actions/actions';
import './QuizContainer.css';

const QuizContainer = ({ question, selectAnswer, goBack, allAnswers, score, refreshQuiz }) => {
  return(
  <div className="app-container">
    <QuestionContainer
      question={question}
      selectAnswer={selectAnswer}
      goBack={goBack}
      allAnswers={allAnswers}
      score={score}
      refreshQuiz={refreshQuiz}
    />
  </div>
)}
const mapStateToProps = state => ({
  question: { index: state.reducer.activeQuestion, ...state.reducer.quizData.questions[state.reducer.activeQuestion]},
  allAnswers: state.reducer.answers,
  score: state.reducer.score
})

const mapDispatchToProps = dispatch => bindActionCreators({
  selectAnswer: (index) => selectAnswer(index),
  goBack: (index) => goBack(index),
  refreshQuiz: () => refreshQuiz()
}, dispatch);

QuizContainer.defaultProps = {
  question: {
    index: 0,
    question: 'Fetching questions',
    answers: []
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizContainer);