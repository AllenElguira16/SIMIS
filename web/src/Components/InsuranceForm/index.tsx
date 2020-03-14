import React from "react";
import { Card, CardBody, CardFooter, Button } from "reactstrap";
import ClientBasicForm from "./ClientBasicForm";
import MainForm from "./MainForm";
// import ClientBasicForm from "../App/Home/ClientBasicForm";

interface Props {
  clientForm: ClientForm;
  onSubmitClient(event: React.FormEvent<HTMLFormElement>): void;
  onInputChange(
    key: keyof ClientForm
  ): (event: React.FormEvent<HTMLInputElement>) => void;
  // dynamicInputOnChange(event: React.FormEvent<HTMLFormElement>): void;
  dynamicInputOnChange(
    s: string,
    i: number
  ): (event: React.FormEvent<HTMLInputElement>) => void;
  addDynamicInput(): void;
  readonly?: boolean;
}

const InsuranceForm: React.FC<Props> = props => {
  const {
    addDynamicInput,
    onSubmitClient,
    onInputChange,
    clientForm,
    dynamicInputOnChange
  } = props;
  return (
    <Card tag="form" onSubmit={onSubmitClient}>
      <CardBody>
        <h5>Add Client</h5>
        <ClientBasicForm props={clientForm} onInputChange={onInputChange} />
        <hr />
        <MainForm
          props={clientForm}
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

export default InsuranceForm;
