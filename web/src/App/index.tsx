import React from "react";
import { Container } from "reactstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import AddItem from "./AddItem";
import AppBar from "./AppBar";
import Client from "./Client";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppBar />

      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/client/:id" component={Client} />
          <Route path="/add-item" component={AddItem} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
