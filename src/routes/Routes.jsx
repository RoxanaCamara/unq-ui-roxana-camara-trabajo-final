import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from "../App";
import Game from "../components/game/Game";
import Rules from "../components/rules/Rules";


const Routes = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/Reglas" component={Rules} />
            <Route exact path="/Generala" component={Game} />
            <Route exact path="/" component={App} />
        </Switch>
    </Router>
  );
}
export default Routes;