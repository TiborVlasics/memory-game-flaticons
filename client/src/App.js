import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import GameContainer from './GameContainer'
import NewGameForm from './NewGameForm';

function App() {
  const [boardSize, setBoardSize] = useState(4)

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <NewGameForm setBoardSize={setBoardSize} />
          </Route>
          <Route path="/game">
            <GameContainer boardSize={boardSize} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
