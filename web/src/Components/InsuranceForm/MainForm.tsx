import React from "react";
import { Row, Col, FormGroup, Input } from "reactstrap";

type Props = {
  props: InsuranceForm;
  onInputChange(
    key: keyof ClientForm
  ): (event: React.FormEvent<HTMLInputElement>) => void;
  dynamicInputOnChange(
    s: string,
    i: number
  ): (event: React.FormEvent<HTMLInputElement>) => void;
  readonly: boolean;
};

const MainForm: React.FC<Props> = ({props, onInputChange, dynamicInputOnChange, readonly}) => {
  const vehicleForms = [
    {
      placeholder: "MODEL",
      value: props.MODEL,
      onChange: onInputChange("MODEL")
    },
    {
      placeholder: "YEAR MODEL",
      value: props.YEARMODEL,
      onChange: onInputChange("YEARMODEL")
    },
    {
      placeholder: "PLATE NO.",
      value: props.PLATENO,
      onChange: onInputChange("PLATENO")
    },
    {
      placeholder: "MOTOR NO.",
      value: props.MOTORNO,
      onChange: onInputChange("MOTORNO")
    },
    {
      placeholder: "CHASIS NO.",
      value: props.CHASISNO,
      onChange: onInputChange("CHASISNO")
    }
  ];

  const miscForms = [
    {
      placeholder: "DS",
      value: props.DS,
      onChange: onInputChange("DS")
    },
    {
      placeholder: "VAT",
      value: props.VAT,
      onChange: onInputChange("VAT")
    },
    {
      placeholder: "LGT",
      value: props.LGT,
      onChange: onInputChange("LGT")
    },
    {
      placeholder: "OTHERS",
      value: props.OTHERS,
      onChange: onInputChange("OTHERS")
    }
  ];

  return (
    <Row form>
      <Col>
        {props.dynamicForm.map((form, key) => (
          <FormGroup key={key}>
            <Input
              value={form.input1}
              onChange={dynamicInputOnChange("input1", key)}
              placeholder="Value"
              readOnly={readonly}
            />
          </FormGroup>
        ))}
      </Col>
      <Col lg="1">
        {props.dynamicForm.map((form, key) => (
          <FormGroup key={key}>
            <Input
              value={form.key}
              onChange={dynamicInputOnChange("key", key)}
              placeholder="Key"
              readOnly={readonly}
            />
          </FormGroup>
        ))}
      </Col>
      <Col>
        {props.dynamicForm.map((form, key) => (
          <FormGroup key={key}>
            <Input
              value={form.input2}
              onChange={dynamicInputOnChange("input2", key)}
              placeholder="Value"
              readOnly={readonly}
            />
          </FormGroup>
        ))}
      </Col>
      <Col>
        {miscForms.map((formProps, key) => (
          <FormGroup key={key}>
            <Input
              placeholder={formProps.placeholder}
              value={formProps.value}
              onChange={formProps.onChange}
              type="number"
              readOnly={readonly}
            />
          </FormGroup>
        ))}
      </Col>
      <Col>
        {vehicleForms.map((formProps, key) => (
          <FormGroup key={key}>
            <Input
              placeholder={formProps.placeholder}
              value={formProps.value}
              onChange={formProps.onChange}
              readOnly={readonly}
            />
          </FormGroup>
        ))}
      </Col>
    </Row>
  );
};

export default MainForm;
