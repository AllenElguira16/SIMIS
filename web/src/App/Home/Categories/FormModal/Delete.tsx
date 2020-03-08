import React, { FC, useContext } from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import CategoryStore from "../../../../Store/CategoryStore";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Delete: FC = () => {
  const { deleteCategory } = useContext(CategoryStore);
  const classes = useStyles();

  return (
    <form className={classes.form} onSubmit={deleteCategory} noValidate>
      <Typography component="h1" variant="h5">
        Delete Category
      </Typography>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="secondary"
        className={classes.submit}
      >
        Delete
      </Button>
      {/* <Button
        type="button"
        fullWidth
        variant="contained"
        className={classes.submit}
      >
        Cancel
      </Button> */}
    </form>
  );
};

export default observer(Delete);
