import React from "react";
import { Row, Col, FormGroup, Input } from "reactstrap";
import moment from "moment";

type Props = {
  props: BasicForm;
  onInputChange(
    key: keyof BasicForm
  ): (event: React.FormEvent<HTMLInputElement>) => void;
};

const ClientBasicForm: React.FC<Props> = ({
  props,
  onInputChange,
}) => {
  return (
    <>
      <Row form>
        <Col>
          <FormGroup>
            <Input
              placeholder="Name"
              value={props.fullName}
              onChange={onInputChange("fullName")}
            />
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Address"
              value={props.address}
              onChange={onInputChange("address")}
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
            />
          </FormGroup>
        </Col>
      </Row>
    </>
  );
};

export default ClientBasicForm;
