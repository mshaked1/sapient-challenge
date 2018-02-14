import * as actions from './constants';
import quizData from '../assets/quiz.json';

export function requestQuizData() {
  return dispatch => dispatch(fetchQuizData());
}

export function fetchQuizData() {
  return { type: actions.SUBMIT_QUIZ_DATA, quizData };
}

export function selectAnswer(answer) {
  console.log(answer);
  return { type: actions.SELECT_ANSWER, answer };
}

export function goBack(index) {
  return { type: actions.GO_BACK, index };
}

export function refreshQuiz() {
  return { type: actions.REFRESH_QUIZ };
}