import React, { FC } from "react";
import { CssBaseline, makeStyles, createStyles } from "@material-ui/core";
import Dashboard from "./Dashboard";
import Home from "./Home";
import { BrowserRouter, Route } from "react-router-dom";
// import classes from "*.module.css";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex"
    }
  })
);

const App: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <BrowserRouter>
        <Route path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    </div>
  );
};

export default App;
