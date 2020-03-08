import React, { FC, useState } from "react";
// import { Route } from "react-router-dom";

import List from "./List";
import FormModal from "./FormModal";
import { Button } from "@material-ui/core";

const Users: FC = () => {
  const [open, setOpen] = useState(false);
  const [formType, setFormType] = useState<FormType>("Add");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openFormAsAdd = () => {
    setFormType("Add");
    handleOpen();
  };

  return (
    <>
      <Button variant="contained" onClick={openFormAsAdd}>
        Add Users
      </Button>
      <List openForm={handleOpen} setFormType={setFormType} />
      <FormModal open={open} onClose={handleClose} formType={formType} />
    </>
  );
};

export default Users;
