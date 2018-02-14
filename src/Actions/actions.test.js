import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './actions';
import * as types from './constants';
import quizData from '../assets/quiz.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('should create an action to select an answer', () => {
    const answer = {
      answer: 'A',
      score: 1
    };
    const expectedAction = {
      type: types.SELECT_ANSWER,
      answer
    }
    expect(actions.selectAnswer(answer)).toEqual(expectedAction)
  });

  it('should create an action to go to previous question', () => {
    const index = 2;
    const expectedAction = {
      type: types.GO_BACK,
      index
    }
    expect(actions.goBack(index)).toEqual(expectedAction)
  });

  it('should create an action to refresh the quiz', () => {
    const expectedAction = {
      type: types.REFRESH_QUIZ
    }
    expect(actions.refreshQuiz()).toEqual(expectedAction)
  });

  it('should create an action to submit quiz data', () => {
    const expectedAction = [ { type: types.SUBMIT_QUIZ_DATA, quizData } ];

    const store = mockStore({ 
      activeQuestion: 0,
      answers: [],
      score: 0,
      quizData: {}
     });

    store.dispatch(actions.requestQuizData());
    expect(store.getActions()).toEqual(expectedAction);
  });
})