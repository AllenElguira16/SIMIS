import React, { FC, ComponentType } from "react";
import { Modal as BaseModal, ModalProps, makeStyles } from "@material-ui/core";
// import { BaseModal }

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.primary}`,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

interface Props {
  open: boolean;
  onClose: () => void;
}

const Modal: ComponentType<Props> = props => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <BaseModal open={props.open} onClose={props.onClose}>
      <div style={modalStyle} className={classes.paper}>
        {props.children}
      </div>
    </BaseModal>
  );
};

export default Modal;
