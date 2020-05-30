import React from 'react';
import AppBar from "../AppBar";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router-dom";
import ClientList from "./ClientList";
import Client from "./Client";
import AddClient from "./AddClient";
import EmployeeStore from "../../Store/EmployeeStore";
import Login from "./Login";
import {observer} from "mobx-react-lite";

const Home = () => {
  const {isAuth} = React.useContext(EmployeeStore);

  if (!isAuth) return <Login />;
  return (
    <>
      <AppBar/>
      <Container className="pt-4" tag="main" id="main-content">
        <Switch>
          {/*AddClient Page*/}
          <Route exact path="/home" component={AddClient}/>
          <Route exact path="/home/client/lists" component={ClientList}/>
          <Route exact path="/home/client/view/:id" component={Client}/>
          <Route exact path="/home/client/edit/:id" component={Client}/>
        </Switch>
      </Container>
    </>
  )
};

export default observer(Home);