import React from "react";
import { Container, Theme, createStyles } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import myTheme from "../MyTheme/MyTheme";
import { isMobile } from "react-device-detect";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: myTheme.appBar.height,
      width: "100%",
      padding: 20,
      textAlign: "left",
      background: myTheme.cards.lightGrey.backgroundColor,
      ...myTheme.cards.lightGrey,
    },
    title: { ...(myTheme.titleText as any) },
    icon: { ...(myTheme.titleIcon as any) },
    body: {
      paddingTop: 12,
      fontFamily: myTheme.title.fontFamily,
    },
    pos: {
      marginBottom: 12,
    },
    button: {
      maxWidth: "100%",
      width: 800,
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(0.5),
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      ...myTheme.button,
    },
    quoteBlock: {
      textAlign: "center",
      borderLeft: "5px solid black",
      borderRadius: isMobile ? "4%" : "2%",
      opacity: "50%",
      background: "rgba(0, 0, 0, 0.1)",
      padding: 15,
      margin: "20px auto",
      width: isMobile ? "90%" : 600,
      fontStyle: "italic",
    },
    quoteHeadline: {},
    quoteUrl: {},
  })
);

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Container className={classes.title}>
        <Typography variant="h3" style={{ ...myTheme.title }} component="h3" id="willkommen">
          <b>S</b>icherheit <b>I</b>n <b>Z</b>ukunft{" "}
        </Typography>
      </Container>
      <Typography className={classes.body} variant="h5">
        Mein Name ist André Wischlinsky und seit über 30 Jahren ist Ihre Sicherheit in der Zukunft mein Job.
      </Typography>
      <Typography className={classes.body} variant="body1">
        Egal ob Privatkunde, Klein- oder Großunternehmen - gerne berate ich Sie zu den Themen Alarmanlagen, Edelmetalle
        und andere Optionen der Altersvorsorge. Ich würde mich sehr über ein Kennenlernen mit Ihnen freuen!
      </Typography>
    </Container>
  );
}
