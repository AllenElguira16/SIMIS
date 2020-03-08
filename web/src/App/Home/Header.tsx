import React, { FC, useState, MouseEvent } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    title: {
      flexGrow: 1
    }
  })
);

const Header: FC = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isAuth, setAuth] = useState(true);
  const isOpen = Boolean(anchorEl);

  const open = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const close = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Stronghold Insurance - Home
        </Typography>
        {isAuth ? (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={open}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="app-bar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              open={isOpen}
              onClose={close}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          <Button color="inherit">Employee Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
