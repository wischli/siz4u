import TimelineIcon from "@material-ui/icons/Timeline"; //

import React from "react";
import { Container, Theme, createStyles } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import myTheme from "../MyTheme/MyTheme";
import { isMobile } from "react-device-detect";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
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
      minWidth: "100%",
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
        <TimelineIcon className={classes.icon} />
        <Typography
          variant="h3"
          style={{ ...myTheme.title }}
          component="h3"
          id="edelmetalle"
        >
          Sicherheit durch Edelmetalle wie Gold oder Silber{" "}
        </Typography>
      </Container>
      <Typography className={classes.body} variant="body1">
        <b>
          Als zertifizierter Mitarbeiter der Multi-Invest Sachwerte GmbH berate
          ich Sie rund um das Thema "Edelmetalle als Geldanlage".
        </b>{" "}
        <br></br>
        <br></br>
        Edelmetalle wie Gold oder Silber gelten besonders in Krisenzeiten schon
        seit Jahrhunderten als sichere und inflationsgeschützte Anlage. sich
        noch!". Dies spigelt sich unter anderem darin wieder, dass der Goldkurs
        zwischen Mai 2019 und Mai 2020 um 33% angestiegen ist (
        <a href="https://www.finanzen.net/rohstoffe/goldpreis" rel="nofollow">
          Quelle
        </a>
        ).
        <Container className={classes.quoteBlock}>
          <Typography className={classes.quoteHeadline} variant="h5">
            {" "}
            "Megatrend Gold: Einsteigen lohnt sich noch!"
          </Typography>
          <Typography className={classes.quoteUrl} variant="caption">
            - Focus-Money Oktober 2019{" "}
          </Typography>
        </Container>
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => {
          window.location.href = "#kontakt";
        }}
      >
        Erfahren Sie mehr
      </Button>
    </Container>
  );
}
