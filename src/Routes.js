import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { db } from './services/firebase';
import Game from './components/Game';
import Leaderboard from './components/Leaderboard';
import LevelSelect from './components/LevelSelect';
import MainMenu from './components/MainMenu';
import Options from './components/Options';

const Routes = () => {

    const [ratings, setRatings] = useState([0,0,0]);

    const lvl1 = 0;
    const lvl2 = 1;
    const lvl3 = 2;
    
  return (
      <Switch>
        <Route exact path="/" component={MainMenu} />
        <Route exact path="/levelselect">
            <LevelSelect db={db} ratings={ratings} component={LevelSelect} />
        </Route>
        <Route exact path="/leaderboard" db={db} component={Leaderboard} />
        <Route exact path="/options" component={Options} />
        <Route exact path="/game/1">
            <Game level={lvl1} db={db} isGameStarted={true} ratings={ratings} setRatings={setRatings} />
        </Route>
        <Route exact path="/game/2">
            <Game level={lvl2} db={db} isGameStarted={true} ratings={ratings} setRatings={setRatings} />
        </Route>
        <Route exact path="/game/3">
            <Game level={lvl3} db={db} isGameStarted={true} ratings={ratings} setRatings={setRatings} />
        </Route>
      </Switch>
  );
};

export default Routes;