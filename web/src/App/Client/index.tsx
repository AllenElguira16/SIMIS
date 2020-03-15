import React from "react";
import Axios from "axios";
import { RouteComponentProps } from "react-router-dom";
import InsuranceForm from "../../Components/InsuranceForm";
import { Card, CardBody, CardFooter, Button } from "reactstrap";

type URLParams = { id: string };

/**
 * Client Page
 * @param { match }
 */
const Client: React.FC<RouteComponentProps<URLParams>> = ({ match }) => {
  const [clientForm, setClientForm] = React.useState<ClientForm>();
  const [clientOriginal, setClientOriginal] = React.useState<ClientForm>();
  const [isReadOnly, setReadOnly] = React.useState(true);

  /**
   * Gets users data before loading HTML
   */
  React.useEffect(() => {
    async function getClient() {
      const { data } = await Axios.get(`/users/${match.params.id}`);
      setClientForm(data);
      setClientOriginal(data);
    }
    getClient();
  }, [match.params.id]);

  /**
   * Submits data to server
   * @param event Event of Form upon submit
   */
  const onSubmitAddClient = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const { data } = await Axios.post("/users", clientForm);
    // console.log(data);
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
      <Card tag="form" onSubmit={onSubmitAddClient}>
        <CardBody>
          {clientForm && (
            <InsuranceForm
              title={`Client ${clientForm.name}`}
              clientForm={clientForm}
              onInputChange={onInputChange}
              dynamicInputOnChange={dynamicInputOnChange}
              readonly={isReadOnly}
            />
          )}
        </CardBody>
        <CardFooter>
          {!isReadOnly && (
            <>
              <Button onClick={addDynamicInput}>Add Input</Button>
              <div className="float-right">
                <Button type="submit" color="primary">
                  Submit
                </Button>
                <Button
                  type="submit"
                  color="warning"
                  onClick={() => {
                    setReadOnly(!isReadOnly);
                    setClientForm(clientOriginal);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </>
          )}
          {isReadOnly && (
            <div className="float-right">
              <Button
                type="submit"
                color="primary"
                onClick={() => setReadOnly(!isReadOnly)}
              >
                Edit
              </Button>
              <Button
                type="submit"
                color="danger"
                // onClick={() => setReadOnly(!isReadOnly)}
              >
                Delete
              </Button>
            </div>
          )}
        </CardFooter>
      </Card>
    </>
  );
};

export default Client;
