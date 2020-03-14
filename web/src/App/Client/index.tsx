import React from "react";
import Axios from "axios";
import { RouteComponentProps } from "react-router-dom";
import InsuranceForm from "../../Components/InsuranceForm";

type URLParams = { id: string };

const Client: React.FC<RouteComponentProps<URLParams>> = ({ match }) => {
  const [clientForm, setClientForm] = React.useState<ClientForm>();
  React.useEffect(() => {
    async function getClient() {
      const { data } = await Axios.get(`/users/${match.params.id}`);
      setClientForm(data);
    }
    getClient();
  }, [Axios]);

  const onSubmitAddClient = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const { data } = await Axios.post("/users", clientForm);
    // console.log(data);
  };

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

  const dynamicInputOnChange = (key: keyof DynamicForm, fi: number) => (
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
          return fi === i ? newField : field;
        })
      });
  };

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
      {clientForm && (
        <InsuranceForm
          addDynamicInput={addDynamicInput}
          clientForm={clientForm}
          onInputChange={onInputChange}
          onSubmitClient={onSubmitAddClient}
          dynamicInputOnChange={dynamicInputOnChange}
          readonly
        />
      )}
    </>
  );
};

export default Client;
