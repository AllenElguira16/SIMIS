import React, { FC, useEffect, useContext } from "react";
import {
  makeStyles,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem
} from "@material-ui/core";
import { observer } from "mobx-react-lite";
import UserStore from "../../../../Store/UserStore";
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

const Edit: FC = () => {
  const classes = useStyles();

  const { form, onChange, editUsers } = useContext(UserStore);
  const { categories, fetchCategories } = useContext(CategoryStore);

  useEffect(() => {
    // console.log(categories);
    fetchCategories();
  }, [fetchCategories]);

  return (
    <form className={classes.form} onSubmit={editUsers} noValidate>
      <Typography component="h1" variant="h5">
        Edit Users
      </Typography>
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <TextField
            variant="outlined"
            margin="normal"
            onChange={onChange("firstname")}
            fullWidth
            value={form.firstname}
            size="small"
            label="Firstname"
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            variant="outlined"
            margin="normal"
            onChange={onChange("lastname")}
            fullWidth
            value={form.lastname}
            size="small"
            label="Lastname"
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            variant="outlined"
            margin="normal"
            onChange={onChange("address")}
            fullWidth
            value={form.address}
            size="small"
            label="Address"
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            variant="outlined"
            margin="normal"
            onChange={onChange("mobile")}
            fullWidth
            value={form.mobile}
            size="small"
            label="Mobile No."
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            variant="outlined"
            margin="normal"
            onChange={onChange("category")}
            fullWidth
            value={form.category}
            size="small"
            label="Category"
            select
          >
            {categories.map((category, i) => (
              <MenuItem key={i} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item sm={12}>
          <TextField
            variant="outlined"
            margin="normal"
            type="textarea"
            onChange={onChange("remarks")}
            fullWidth
            value={form.remarks}
            size="small"
            multiline
            label="Remarks"
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Edit
      </Button>
    </form>
  );
};

export default observer(Edit);
