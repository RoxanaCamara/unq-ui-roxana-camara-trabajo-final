import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { SessionProvider } from "../components/helper/Session";
import  Login from "../components/login/Login";
import GameMultiplayer from "../components/multiplayer/GameMultiplayer";
import Rules from "../components/rules/Rules";
import Solitarie from "../components/solitarie/Solitarie";


const GeneralaRoutes = () => {
  return (
    <Router>
      <SessionProvider>
        <Switch>
          <Route exact path="/rules" component={Rules} />
          <Route exact path="/solitarie" component={Solitarie} />
          <Route exact path="/multiplayer" component={GameMultiplayer} />
          <Route exact path="/" component={Login} />
        </Switch>
      </SessionProvider>
    </Router>
  );
}
export default GeneralaRoutes;