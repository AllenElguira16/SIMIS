import React, { FC } from "react";
import Modal from "../../../../Components/Modal";
import Add from "./Add";
import Edit from "./Edit";
import Delete from "./Delete";

interface Props {
  open: boolean;
  onClose: () => void;
  formType: FormType;
}

const FormModal: FC<Props> = props => {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      {props.formType === "Add" && <Add />}
      {props.formType === "Edit" && <Edit />}
      {props.formType === "Delete" && <Delete />}
    </Modal>
  );
};

export default FormModal;
