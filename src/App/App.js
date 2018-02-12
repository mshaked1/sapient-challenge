import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import QuizContainer from '../QuizContainer/QuizContainer';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Route render={(props) => {
        return props.location.pathname === '/assessment' ? (
          <QuizContainer />
        ) : (
          <Redirect to="/assessment" />)
        
        }}
      />
    </div>
  </Router>
)

export default App;
