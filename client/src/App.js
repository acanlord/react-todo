import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';

import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Todo from './components/pages/TodoList/Todo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-navigation">
          <h1 className="App-title">MERN Starter</h1>
          <Link to="/">Welcome</Link>
          <Link to="/todo/">Todo</Link>
        </nav>

        <div className="App-mainContent">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/todo/' component={Todo} />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
