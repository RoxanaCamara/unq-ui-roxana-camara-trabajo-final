import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import  Login from "../modules/Login/Login";
import Solitarie from "../components/modo-game/Solitarie";
import Rules from "../modules/Rules/Rules";
import { SessionProvider } from "../hooks/Session";
import  Home from "../modules/Home/Home";
import CreateAcount from "../modules/Login/CreateAcount";
import Multiplayer from "../modules/Multiplayer/Multiplayer";


const GeneralaRoutes = () => {
  return (
    <Router>
      <SessionProvider>
        <Switch>
          <Route exact path="/rules" component={Rules} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/solitarie" component={Solitarie} />
          <Route exact path="/multiplayer" component={Multiplayer} />
          <Route exact path="/createAccount" component={CreateAcount} />
          <Route exact path="/" component={Login} />
        </Switch>
      </SessionProvider>
    </Router>
  );
}
export default GeneralaRoutes;