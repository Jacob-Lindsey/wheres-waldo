import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from './components/Game';
import Leaderboard from './components/Leaderboard';
import LevelSelect from './components/LevelSelect';
import MainMenu from './components/MainMenu';
import Options from './components/Options';

const Routes = () => {

    const lvl1 = 0;
    const lvl2 = 1;
    const lvl3 = 2;

  return (
      <Switch>
        <Route exact path="/" component={MainMenu} />
        <Route exact path="/levelselect" component={LevelSelect} />
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="/options" component={Options} />
        <Route exact path="/game/1">
            <Game level={lvl1} isGameStarted={true} />
        </Route>
        <Route exact path="/game/2">
            <Game level={lvl2} isGameStarted={true} />
        </Route>
        <Route exact path="/game/3">
            <Game level={lvl3} isGameStarted={true} />
        </Route>
      </Switch>
  );
};

export default Routes;