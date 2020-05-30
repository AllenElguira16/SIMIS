import React from "react";
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
import ClientStore from "../../../Store/ClientStore";
import {observer} from "mobx-react-lite";

/**
 * Client List Page
 *
 * List of Clients in table
 */
const ClientList: React.FC = () => {
  const {deleteClient, getClientList, searchClient, clientList} = React.useContext(ClientStore);

  React.useEffect(() => {
    (async () => await getClientList())();
  }, [getClientList]);

  if (!clientList) return <>Loading...</>;
  return (
    <Card>
      <CardHeader>
        <Row>
          <Col className="align-self-center">
            <h5>Client Lists</h5>
          </Col>
          <Col>
            <Input placeholder="Search - Policy ID" onInput={async ({currentTarget}) => {
              await searchClient(currentTarget.value);
            }}/>
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
          {clientList.length !== 0 ? (
            clientList.map((client, key) => (
              <tr key={key}>
                <td>{client?.policyID}</td>
                <td>{client?.fullName}</td>
                <td>
                  <Button type="button" color="primary" tag={Link} to={`/home/client/${client?.id}`}>
                    Edit
                  </Button>
                  <Button type="button" color="danger" onClick={async () => await deleteClient(client?.id)}>
                    Delete
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

export default observer(ClientList);
