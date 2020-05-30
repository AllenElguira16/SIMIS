import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";

/**
 * Main Routing
 */
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/admin" component={Admin}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
