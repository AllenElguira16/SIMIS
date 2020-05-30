import React from "react";
import { RouteComponentProps } from "react-router-dom";
import InsuranceForm from "../../../Components/InsuranceForm";
import { Card, CardBody, CardFooter, Button } from "reactstrap";
import ClientStore from "../../../Store/ClientStore";
import {observer} from "mobx-react-lite";

type URLParams = { id: string };

/**
 * Client Page
 * @param { match }
 */
const Client: React.FC<RouteComponentProps<URLParams>> = ({ match }) => {
  const [clientForm, setClientForm] = React.useState<ClientForm>();
  const [clientOriginal, setClientOriginal] = React.useState<ClientForm>();
  const {getClient, editClient} = React.useContext(ClientStore);

  /**
   * Gets users data before loading HTML
   */
  React.useEffect(() => {
    (async () => {
      const data = await getClient(match.params.id);
      setClientForm(data);
      setClientOriginal(data);
    })();
  }, [getClient, match.params.id]);

  /**
   * Submits data to server
   * @param event Event of Form upon submit
   */
  const onEditClient = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await editClient(clientForm);
  };

  /**
   * Handles Input Change
   * @param key parameter that accepts string that is match to the key of ClientForm interface
   */
  const onInputChange = (key: keyof ClientForm) => (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    if (clientForm) {
      setClientForm({
        ...clientForm,
        [key]: event.currentTarget.value
      });
    }
  };

  /**
   * Handles input of Dynamic Input
   * @param key         parameter that accepts string that contains keyof DynamicForm
   * @param dynamicKey  Index of Dynamic Input
   */
  const dynamicInputOnChange = (key: keyof DynamicForm, dynamicKey: number) => (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    if (clientForm)
      setClientForm({
        ...clientForm,
        dynamicForm: clientForm.dynamicForm.map((field, i) => {
          let newField = {
            ...field,
            [key]: event.currentTarget.value
          };
          return dynamicKey === i ? newField : field;
        })
      });
  };

  /**
   * Add new Dynamic Input
   */
  const addDynamicInput = () => {
    if (clientForm)
      setClientForm({
        ...clientForm,
        dynamicForm: [
          ...clientForm.dynamicForm,
          {
            key: "",
            input1: "",
            input2: ""
          }
        ]
      });
  };

  return (
    <>
      <Card tag="form" onSubmit={onEditClient}>
        <CardBody>
          {clientForm && (
            <InsuranceForm
              title={`Client ${clientForm.fullName}`}
              clientForm={clientForm}
              onInputChange={onInputChange}
              dynamicInputOnChange={dynamicInputOnChange}
            />
          )}
        </CardBody>
        <CardFooter>
          <Button onClick={addDynamicInput}>Add Input</Button>
          <div className="float-right">
            <Button type="submit" color="primary">
              Submit
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default observer(Client);
