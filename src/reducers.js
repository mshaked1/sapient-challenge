import * as actions from './constants';

const initialState = {
  activeQuestion: 0,
  answers: [],
  score: 0,
  quizData: {}
}

const reducer = (state = initialState, action) => {
  let activeQuestion;
  switch(action.type) {
    case actions.SUBMIT_QUIZ_DATA:
      return { ...state, quizData: action.quizData };
    case actions.SELECT_ANSWER:
      const answers = [...state.answers];
      activeQuestion = state.activeQuestion + 1;
      answers[state.activeQuestion] = action.answer.score;
      const score = answers.reduce((total, current) => (total + current), 0);
      return { ...state, answers, score, activeQuestion };
    case actions.GO_BACK:
      activeQuestion = action.index - 1;
      return { ...state, activeQuestion };
    case actions.REFRESH_QUIZ:
      return { ...state, activeQuestion: 0, answers: [], score: 0 };
    default: 
      return { ...state };
  }
}

export default reducer;