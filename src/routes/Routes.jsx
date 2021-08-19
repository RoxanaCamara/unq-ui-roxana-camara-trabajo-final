import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Game from "../components/game/Game";
import { SessionProvider } from "../components/helper/Session";
import { Login } from "../components/login/Login";
import Rules from "../components/rules/Rules";


const GeneralaRoutes = () => {
  return (
    <Router>
      <SessionProvider>
        <Switch>
          <Route exact path="/reglas" component={Rules} />
          <Route exact path="/Game" component={Game} />
          <Route exact path="/" component={Login} />
        </Switch>
      </SessionProvider>
    </Router>
  );
}
export default GeneralaRoutes;