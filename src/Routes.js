import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LevelSelect from './components/LevelSelect';
import Game from './components/Game';

const Routes = () => {

    const lvl1 = 0;
    const lvl2 = 1;
    const lvl3 = 2;

  return (
      <Switch>
        {/* <Route exact path="/" component={LandingPage} /> */}
        <Route exact path="/" component={LevelSelect} />
        <Route exact path="/levelselect" component={LevelSelect} />
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