import React from "react";
import { Container } from "reactstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
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
      <Container fluid className="pt-4">
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
