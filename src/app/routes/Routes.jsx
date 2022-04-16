import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import  Login from "../modules/Login/Login";
import Multiplayer from "../components/modo-game/Multiplayer";
import Solitarie from "../components/modo-game/Solitarie";
import Rules from "../components/rules/Rules";
import { SessionProvider } from "../hooks/Session";


const GeneralaRoutes = () => {
  return (
    <Router>
      <SessionProvider>
        <Switch>
          <Route exact path="/rules" component={Rules} />
          <Route exact path="/solitarie" component={Solitarie} />
          <Route exact path="/multiplayer" component={Multiplayer} />
          <Route exact path="/" component={Login} />
        </Switch>
      </SessionProvider>
    </Router>
  );
}
export default GeneralaRoutes;