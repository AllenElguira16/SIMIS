import React from "react";
import ClientBasicForm from "./ClientBasicForm";
import MainForm from "./MainForm";
// import ClientBasicForm from "../App/AddClient/ClientBasicForm";

interface Props {
  clientForm: ClientForm;
  onInputChange(
    key: keyof ClientForm
  ): (event: React.FormEvent<HTMLInputElement>) => void;
  // dynamicInputOnChange(event: React.FormEvent<HTMLFormElement>): void;
  dynamicInputOnChange(
    s: string,
    i: number
  ): (event: React.FormEvent<HTMLInputElement>) => void;
  title: string;
  readonly: boolean
}

const InsuranceForm: React.FC<Props> = props => {
  const { onInputChange, clientForm, dynamicInputOnChange } = props;
  return (
    <>
      <h5>{props.title}</h5>
      <hr/>
      <ClientBasicForm
        props={clientForm}
        onInputChange={onInputChange}
        readonly={props.readonly}
      />
      <hr/>
      <MainForm
        props={clientForm}
        onInputChange={onInputChange}
        dynamicInputOnChange={dynamicInputOnChange}
        readonly={props.readonly}
      />
    </>
  );
};

export default InsuranceForm;
