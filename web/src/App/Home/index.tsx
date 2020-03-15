import React from "react";
// import { Button, Card, CardBody, CardFooter } from "reactstrap";
// import ClientBasicForm from "./ClientBasicForm";
// import MainForm from "./InsuranceForm";
import Axios from "axios";
import InsuranceForm from "../../Components/InsuranceForm";
import { Card, CardBody, CardFooter, Button } from "reactstrap";

/**
 * Home Page
 */
const Home: React.FC = () => {
  const [clientForm, setClientForm] = React.useState<ClientForm>({
    name: "",
    address: "",
    date: Date.now(),
    policyID: "",
    dynamicForm: [],
    DS: "",
    VAT: "",
    LGT: "",
    OTHERS: "",
    MODEL: "",
    YEARMODEL: "",
    PLATENO: "",
    MOTORNO: "",
    CHASISNO: ""
  });

  /**
   * Submit data to server to add new client
   * @param event Accepts Event from FormElement
   */
  const onSubmitAddClient = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { data } = await Axios.post("/users", clientForm);
    console.log(data);
  };

  /**
   *
   * @param key Accepts keyof ClientForm
   */
  const onInputChange = (key: keyof ClientForm) => (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setClientForm({
      ...clientForm,
      [key]: event.currentTarget.value
    });
  };

  const dynamicInputOnChange = (key: keyof DynamicForm, fi: number) => (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setClientForm({
      ...clientForm,
      dynamicForm: clientForm.dynamicForm.map((field, i) => {
        let newField = {
          ...field,
          [key]: event.currentTarget.value
        };
        return fi === i ? newField : field;
      })
    });
  };

  const addDynamicInput = () => {
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
    <Card tag="form" onSubmit={onSubmitAddClient}>
      <CardBody>
        <InsuranceForm
          title="Add Client Form"
          clientForm={clientForm}
          onInputChange={onInputChange}
          dynamicInputOnChange={dynamicInputOnChange}
        />
      </CardBody>
      <CardFooter>
        <Button onClick={addDynamicInput}>Add Input</Button>
        <Button type="submit" color="primary" className="float-right">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Home;
