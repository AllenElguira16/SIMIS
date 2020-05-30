import React from 'react';
import AppBar from "../AppBar";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router-dom";
import ClientList from "./ClientList";
import Client from "./Client";
import AddClient from "./AddClient";

const Home = () => {
  return (
    <>
      <AppBar/>
      <Container className="pt-4" tag="main" id="main-content">
        <Switch>
          {/*AddClient Page*/}
          <Route exact path="/home" component={AddClient}/>
          <Route exact path="/home/client/lists" component={ClientList}/>
          <Route exact path="/home/client/:id" component={Client}/>
        </Switch>
      </Container>
    </>
  )
};

export default Home;