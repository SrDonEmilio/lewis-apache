import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListItemText from "@material-ui/core/ListItemText";

import "./Header.css";

import logo from "../images/logo.png";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const Header = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const clickinmeeeeee = (string, anchor) => {
    props.onChange(string);
    toggleDrawer(anchor, false);
    return;
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div id="logo-menu">
        <img src={logo} alt="logo-menu" />
      </div>
      <List>
        <ListItem
          button
          key="inicio"
          onClick={(e) => clickinmeeeeee("Home", anchor)}
        >
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem
          button
          key="carga"
          onClick={(e) => clickinmeeeeee("Carga", anchor)}
        >
          <ListItemText primary="Carga Formal" />
        </ListItem>
        <ListItem
          button
          key="geometrias"
          onClick={(e) => clickinmeeeeee("Geometrias", anchor)}
        >
          <ListItemText primary="Geometrías Moleculares" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem
          button
          key="references"
          onClick={(e) => clickinmeeeeee("References", anchor)}
        >
          <ListItemText primary="Sitios de Interés" />
        </ListItem>
        <ListItem
          button
          key="about"
          onClick={(e) => clickinmeeeeee("About", anchor)}
        >
          <ListItemText primary="Acerca de" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            {["menu"].map((anchor) => (
              <React.Fragment key={anchor}>
                {" "}
                <IconButton
                  onClick={toggleDrawer(anchor, true)}
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <SwipeableDrawer
                  anchor="left"
                  open={state[anchor] === undefined ? false : state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
            <Typography variant="h6" className={classes.title}>
              <img src={logo} alt="logo" id="logo" />
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </div>
  );
};

export default Header;
