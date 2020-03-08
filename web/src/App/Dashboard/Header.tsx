import React, { FC } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    }
  })
);

const Header: FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Stronghold Insurance - Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
