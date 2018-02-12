import React, { Component } from 'react';
import QuestionContainer from '../QuestionContainer/QuestionContainer';
import quizData from '../assets/quiz.json';
import './QuizContainer.css';

class QuizContainer extends Component {
  state = {
    activeQuestion: 0,
    answers: [],
    score: 0,
  };

  selectAnswer = (answer) => {
    const answers = [...this.state.answers];
    const activeQuestion = this.state.activeQuestion + 1;
    answers[this.state.activeQuestion] = answer;
    const score = answers.reduce((total, current) => (total + current.score), 0);
    this.setState({ answers, score, activeQuestion });
  }

  goBack = (answer) => {
    const activeQuestion = answer - 1;
    this.setState({ activeQuestion });
  };

  refreshQuiz = () => {
    this.setState({
      activeQuestion: 0,
      answers: [],
      score: 0
    })
  }

  render() {
    return (
      <div className="app-container">
        <QuestionContainer
          question={{index: this.state.activeQuestion, ...quizData.questions[this.state.activeQuestion]}}
          selectAnswer={this.selectAnswer}
          goBack={this.goBack}
          allAnswers={this.state.answers}
          score={this.state.score}
          refreshQuiz={this.refreshQuiz}
        />
      </div>
    )
  }
}

export default QuizContainer;