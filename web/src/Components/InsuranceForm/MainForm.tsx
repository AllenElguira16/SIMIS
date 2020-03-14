import React, { Fragment } from "react";
import { Row, Col, FormGroup, Input, Button } from "reactstrap";

type Props = {
  props: InsuranceForm;
  onInputChange(
    key: keyof ClientForm
  ): (event: React.FormEvent<HTMLInputElement>) => void;
  dynamicInputOnChange(
    s: string,
    i: number
  ): (event: React.FormEvent<HTMLInputElement>) => void;
};

const MainForm: React.FC<Props> = ({
  props,
  onInputChange,
  dynamicInputOnChange
}) => {
  return (
    <Row form>
      <Col>
        {props.dynamicForm.map((form, key) => (
          <FormGroup key={key}>
            <Input
              value={form.input1}
              onChange={dynamicInputOnChange("input1", key)}
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
            />
          </FormGroup>
        ))}
      </Col>
      <Col>
        <FormGroup>
          <Input
            placeholder="DS"
            value={props.DS}
            onChange={onInputChange("DS")}
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="VAT"
            value={props.VAT}
            onChange={onInputChange("VAT")}
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="LGT"
            value={props.LGT}
            onChange={onInputChange("LGT")}
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="OTHERS"
            value={props.OTHERS}
            onChange={onInputChange("OTHERS")}
          />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Input
            placeholder="MODEL"
            value={props.MODEL}
            onChange={onInputChange("MODEL")}
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="YEAR MODEL"
            value={props.YEARMODEL}
            onChange={onInputChange("YEARMODEL")}
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="PLATE NO."
            value={props.PLATENO}
            onChange={onInputChange("PLATENO")}
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="MOTOR NO."
            value={props.MOTORNO}
            onChange={onInputChange("MOTORNO")}
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="CHASIS NO."
            value={props.CHASISNO}
            onChange={onInputChange("CHASISNO")}
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default MainForm;
