import React from 'react';
import {Button, Card, CardBody, Col, Form, FormGroup, Input} from "reactstrap";
import EmployeeStore from "../../../Store/EmployeeStore";

const Login = () => {
  const {doLogin} = React.useContext(EmployeeStore);
  const [input, setInput] = React.useState<Employee>({
    username: '',
    password: ''
  });
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await doLogin(input)
  };

  const onInputChange = ({currentTarget}: React.FormEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [currentTarget.name]: currentTarget.value
    });
  };

  return (
    <Col md={4} className="mx-auto mt-5">
      <Card>
        <CardBody>
          <Form onSubmit={onSubmit}>
            <h4>Employee Login</h4>
            <FormGroup>
              <Input value={input.username} onChange={onInputChange} name="username" type="text" placeholder="Type your username"/>
            </FormGroup>
            <FormGroup>
              <Input value={input.password} onChange={onInputChange} name="password" type="password" placeholder="Type your password"/>
            </FormGroup>
            <Button type="submit">Login</Button>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Login;