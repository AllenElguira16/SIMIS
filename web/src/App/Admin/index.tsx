import React from 'react';
import AdminStore from "../../Store/AdminStore";
import Login from "./Login";
import {observer} from "mobx-react-lite";
import { Route, Redirect } from 'react-router-dom';
import Employees from "./Employees";
import {Card, CardBody, Container, Nav} from "reactstrap";
import CardHeader from "reactstrap/lib/CardHeader";
import NavItemLink from "../../Components/NavItemLink";

const Admin = () => {
  const {isLoggedIn} = React.useContext(AdminStore);

  if (!isLoggedIn) return <Login />;
  return (

    <>
      <Container>
      <Card>
        <CardHeader>
          <Nav pills card>
          <NavItemLink to="/admin/employees">Students</NavItemLink>
          <NavItemLink to="/admin/history">History</NavItemLink>
        </Nav>
        </CardHeader>
        <CardBody>
          <Redirect exact path="/admin" to="/admin/employees" />
          <Route path="/admin/employees" component={Employees} />
        </CardBody>
        </Card>
      </Container>
    </>
  )
};

export default observer(Admin);