import React from 'react';
import AdminStore from "../../Store/AdminStore";
import Login from "./Login";
import {observer} from "mobx-react-lite";
import {Route, Redirect, Switch} from 'react-router-dom';
import Employees from "./Employees";
import {Card, CardBody, Container, Nav} from "reactstrap";
import CardHeader from "reactstrap/lib/CardHeader";
import NavItemLink from "../../Components/NavItemLink";
import AddClient from "../Home/AddClient";
import ClientList from "../Home/ClientList";
import Client from "../Home/Client";

const Admin = () => {
  const {isLoggedIn} = React.useContext(AdminStore);

  if (!isLoggedIn) return <Login />;
  return (

    <>
      <Container>
      <Card>
        <CardHeader>
          <Nav pills card>
          <NavItemLink to="/admin/employees">Employees</NavItemLink>
            <NavItemLink to="/admin/client/add">Add Client</NavItemLink>
            <NavItemLink to="/admin/client/lists">Clients</NavItemLink>
        </Nav>
        </CardHeader>
        <CardBody>
          <Redirect exact path="/admin" to="/admin/employees" />
          <Route path="/admin/employees" component={Employees} />
          <Route exact path="/admin/client/add" component={AddClient}/>
          <Route exact path="/admin/client/lists" component={ClientList}/>
          <Route exact path="/admin/client/:id" component={Client}/>
        </CardBody>
        </Card>
      </Container>
    </>
  )
};

export default observer(Admin);