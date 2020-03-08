import React, { FC, useContext } from "react";
import { makeStyles, Typography, TextField, Button } from "@material-ui/core";
import CategoryStore from "../../../../Store/CategoryStore";
import { observer } from "mobx-react-lite";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Add: FC = () => {
  const { form, onChange, addCategory } = useContext(CategoryStore);
  const classes = useStyles();

  return (
    <form className={classes.form} onSubmit={addCategory} noValidate>
      <Typography component="h1" variant="h5">
        Add Category
      </Typography>
      <TextField
        variant="outlined"
        margin="normal"
        onChange={onChange("name")}
        fullWidth
        autoFocus
        value={form.name}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Add
      </Button>
    </form>
  );
};

export default observer(Add);
