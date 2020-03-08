import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  createStyles
} from "@material-ui/core";
import ExpandedListItem from "../../Components/ExpandedListItem";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    toolbar: theme.mixins.toolbar,
    nested: {
      paddingLeft: theme.spacing(4)
    }
  })
);

const SideBar: React.FC = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.toolbar} />
      <List>
        {["Users", "Categories"].map((title, i) => (
          <ListItem
            button
            component={Link}
            to={`/${title.toLowerCase()}`}
            className={classes.nested}
            key={i}
          >
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
