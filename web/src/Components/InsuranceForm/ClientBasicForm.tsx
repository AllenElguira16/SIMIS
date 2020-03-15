import React from "react";
import { Row, Col, FormGroup, Input } from "reactstrap";
import moment from "moment";

type Props = {
  props: BasicForm;
  onInputChange(
    key: keyof BasicForm
  ): (event: React.FormEvent<HTMLInputElement>) => void;
  readonly?: boolean;
};

const ClientBasicForm: React.FC<Props> = ({
  props,
  onInputChange,
  readonly
}) => {
  return (
    <>
      <Row form>
        <Col>
          <FormGroup>
            <Input
              placeholder="Name"
              value={props.name}
              onChange={onInputChange("name")}
              disabled={readonly}
            />
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Address"
              value={props.address}
              onChange={onInputChange("address")}
              disabled={readonly}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Input
              type="date"
              placeholder="Date"
              value={moment(props.date).format("YYYY-MM-DD")}
              onChange={onInputChange("date")}
              disabled={readonly}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col>
          <FormGroup>
            <Input
              placeholder="Policy No."
              value={props.policyID}
              onChange={onInputChange("policyID")}
              disabled={readonly}
            />
          </FormGroup>
        </Col>
      </Row>
    </>
  );
};

export default ClientBasicForm;
