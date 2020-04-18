import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PhoneIcon from "@material-ui/icons/Phone";
import myTheme from "../MyTheme/MyTheme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    bar: {
      backgroundColor: myTheme.primaryColor,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    phoneButton: {
      marginLeft: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontFamily: "Exo",
      textTransform: "uppercase",
      fontWeight: "bold",
      letterSpacing: 2,
    },
    tel: {
      color: `${myTheme.secondaryColor} !important`,
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.bar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Siz4u
          </Typography>
          <a href="tel:+491635622166" className={classes.tel}>
            <IconButton
              edge="end"
              className={classes.phoneButton}
              color="inherit"
            >
              <PhoneIcon></PhoneIcon>
            </IconButton>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
