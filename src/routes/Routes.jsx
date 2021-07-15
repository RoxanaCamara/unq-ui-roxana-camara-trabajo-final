import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from "../App";
import Game from "../components/game/Game";
import { SessionProvider } from "../components/helper/Session";
import Rules from "../components/rules/Rules";


const GeneralaRoutes = () => {
  return (
    <Router>
      <SessionProvider>
        <Switch>
          <Route exact path="/reglas" component={Rules} />
          <Route exact path="/generala" component={Game} />
          <Route exact path="/" component={Game} />
        </Switch>
      </SessionProvider>
    </Router>
  );
}
export default GeneralaRoutes;