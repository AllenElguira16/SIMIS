import React from 'react';
import AdminStore from "../../Store/AdminStore";
import {Button, Card, CardBody, Col, Form, FormGroup, Input} from "reactstrap";
import {observer} from "mobx-react-lite";

const Login = () => {
  const [password, setPassword] = React.useState('');
  const {doLogIn} = React.useContext(AdminStore);

  const onInputChange = ({currentTarget}: React.FormEvent<HTMLInputElement>) => {
    setPassword(currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    doLogIn(password);
  };

  return (
    <Col md={4} className="mx-auto mt-5">
      <Card>
        <CardBody>
          <Form onSubmit={onSubmit}>
            <h4>Admin Login</h4>
            <FormGroup>
              <Input onInput={onInputChange} type="password" placeholder="Type your password"/>
            </FormGroup>
            <Button type="submit">Login</Button>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default observer(Login);