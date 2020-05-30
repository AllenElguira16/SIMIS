import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";

/**
 * Main Routing
 */
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to="/home" />
        <Route path="/home" component={Home}/>
        <Route path="/admin" component={Admin}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
