import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PhoneIcon from "@material-ui/icons/Phone";
import myTheme from "../MyTheme/MyTheme";
import MyMenu from "./MyMenu";
import { isMobile } from "react-device-detect";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0,
    },
    toolbar: {
      width: isMobile ? "96%" : "100%",
      maxWidth: 1100,
      margin: isMobile ? 0 : "auto",
      padding: 0,
    },
    bar: {
      backgroundColor: myTheme.primaryColor,
    },
    menuButton: {
      marginLeft: isMobile ? 0 : theme.spacing(2),
    },
    phoneButton: {
      marginRight: isMobile ? 0 : theme.spacing(4),
      display: "flex",
      flexDirection: "column",
      justifyContent: "spa",
    },
    title: {
      flexGrow: 1,
      fontFamily: "Exo",
      textTransform: "uppercase",
      fontWeight: "bold",
      letterSpacing: 2,
      textAlign: "center",
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.bar}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MyMenu />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Siz4u
          </Typography>
          <IconButton
            edge="end"
            className={classes.phoneButton}
            color="inherit"
            onClick={() => {
              window.location.href = "tel:+491635622166";
            }}
          >
            <PhoneIcon style={{ alignSelf: "start" }}></PhoneIcon>{" "}
            {!isMobile ? (
              <Typography variant="subtitle2" className={classes.title} style={{ paddingLeft: 20 }}>
                +49 163 5622166
              </Typography>
            ) : (
              ""
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
