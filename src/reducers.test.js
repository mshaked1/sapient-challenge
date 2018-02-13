import reducer from './reducers';
import * as types from './constants';
import quizData from './assets/quiz.json';

const initialState = {
  activeQuestion: 0,
  answers: [],
  score: 0,
  quizData: {}
}
describe('app reduce', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SUBMIT_QUIZ_DATA', () => {
    expect(
      reducer(initialState, {
        type: types.SUBMIT_QUIZ_DATA,
        quizData
      })
    ).toEqual(
      {
        ...initialState,
        quizData
      }
    )
  });

  it('should handle SELECT_ANSWER', () => {
    const answer = {
      answer: 'A',
      score: 1
    }
    expect(
      reducer(initialState, {
        type: types.SELECT_ANSWER,
        answer
      })
    ).toEqual(
      {
        ...initialState,
        activeQuestion: 1,
        score: 1,
        answers: [1]
      }
    );
    expect(
      reducer({
        ...initialState,
        activeQuestion: 1,
        score: 2,
        answers: [2]
      }, {
        type: types.SELECT_ANSWER,
        answer
      })
    ).toEqual({
      ...initialState,
      activeQuestion: 2,
      score: 3,
      answers: [2, 1]
    })
  });

  it('should handle GO_BACK', () => {
    expect(
      reducer({
        ...initialState,
        activeQuestion: 3
      }, {
        type: types.GO_BACK,
        index: 3
      })
    ).toEqual({
      ...initialState,
      activeQuestion: 2
    })
  });

  it('should handle REFRESH_QUIZ', () => {
    expect(
      reducer({
        ...initialState,
        activeQuestion: 3,
        score: 4,
        answers: [1,2,1]
      }, {
        type: types.REFRESH_QUIZ
      })
    ).toEqual({
      ...initialState
    })
  });
});