import React from "react";
import { Container } from "reactstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import AppBar from "./AppBar";
import Client from "./Client";
import ClientList from "./ClientList";

/**
 * Main Routing
 */
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppBar />
      <Container className="pt-4" tag="main" id="main-content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/client-lists" component={ClientList} />
          <Route exact path="/client/:id" component={Client} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
