import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import GameContainer from './GameContainer'
import NewGameForm from './NewGameForm';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <NewGameForm />
          </Route>
          <Route path="/game">
            <GameContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
