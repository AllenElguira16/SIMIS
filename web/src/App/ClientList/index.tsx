import React from "react";
import Axios from "axios";
import {
  Card,
  CardBody,
  Table,
  Button,
  CardHeader,
  Input,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";

/**
 * Client List Page
 *
 * List of Clients in table
 */
const ClientList: React.FC = () => {
  const [clientForms, setClientForms] = React.useState<ClientForm[]>();

  React.useEffect(() => {
    async function fetchClients() {
      const { data } = await Axios.get("/users");
      setClientForms(data);
    }
    fetchClients();
  }, [setClientForms]);

  if (!clientForms) return <>Loading...</>;
  return (
    <Card>
      <CardHeader>
        <Row>
          <Col className="align-self-center">
            <h5>Client Lists</h5>
          </Col>
          <Col>
            <Input placeholder="Search - Policy ID" />
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <Table>
          <thead>
            <tr>
              <th>PolicyID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clientForms.length !== 0 ? (
              clientForms.map((clientForm, key) => (
                <tr key={key}>
                  <td>{clientForm.policyID}</td>
                  <td>{clientForm.name}</td>
                  <td>
                    <Button
                      tag={Link}
                      to={`/client/${clientForm.id}`}
                      color="primary"
                    >
                      View
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>Empty</td>
              </tr>
            )}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default ClientList;
