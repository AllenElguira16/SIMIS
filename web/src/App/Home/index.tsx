import React, { FC } from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import Header from "./Header";
import SideBar from "./SideBar";
import Categories from "./Categories";
import { Route } from "react-router-dom";
import Users from "./Users";

const useStyles = makeStyles(theme =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    toolbar: theme.mixins.toolbar
  })
);

const Home: FC = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <SideBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route path="/categories" component={Categories} />
        <Route path="/users" component={Users} />
      </main>
    </>
  );
};

export default Home;
