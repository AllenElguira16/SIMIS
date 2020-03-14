import React from "react";
// import { Button, Card, CardBody, CardFooter } from "reactstrap";
// import ClientBasicForm from "./ClientBasicForm";
// import MainForm from "./InsuranceForm";
import Axios from "axios";
import InsuranceForm from "../../Components/InsuranceForm";

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

  const onSubmitAddClient = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { data } = await Axios.post("/users", clientForm);
    console.log(data);
  };

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
    <InsuranceForm
      addDynamicInput={addDynamicInput}
      clientForm={clientForm}
      onInputChange={onInputChange}
      onSubmitClient={onSubmitAddClient}
      dynamicInputOnChange={dynamicInputOnChange}
    />
  );
};

export default Home;
