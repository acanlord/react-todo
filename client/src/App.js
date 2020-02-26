import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';

import LandingPage from './components/pages/LandingPage/LandingPage.js';
// import TodoItems from './components/pages/TodoList/TodoItems.js';
// import TodoList from './components/pages/TodoList/TodoList.js';
import Todo from './components/pages/TodoList/Todo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-navigation">
          <h1 className="App-title">MERN Starter</h1>
          <Link to="/">Welcome</Link>
          <Link to="/todo/">Todo</Link>
          {/* <Link to="/todoList/">TodoList</Link>
          <Link to="/todoItems/">TodoItems</Link> */}
        </nav>

        <div className="App-mainContent">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/todo' component={Todo} />
            {/* <Route exact path='/todoList/' component={TodoList} />
            <Route exact path='/todoItems/' component={TodoItems} /> */}
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
