import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import QuizContainer from '../QuizContainer/QuizContainer';
import { requestQuizData } from '../../Actions/actions';
import './App.css';

export class App extends Component {
  componentDidMount() {
    this.props.requestQuizData();
  }
  render() {
    return (
    <Router>
      <div>
        <Route render={(renderProps) => {
          return renderProps.location.pathname === '/assessment' ? (
            Object.keys(this.props.quizData).length > 0 ? <QuizContainer /> : <div>Fetching quiz...</div>
          ) : (
            <Redirect to="/assessment" />)
          
          }}
        />
      </div>
    </Router>
    )
  }
}

App.defaultProps = {
  quizData: {

  }
}

const mapStateToProps = state => ({
  quizData: state.reducer.quizData
});

const mapDispatchToProps = dispatch => bindActionCreators({
  requestQuizData: () => requestQuizData()
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
