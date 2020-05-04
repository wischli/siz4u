import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ExtensionIcon from "@material-ui/icons/Extension";
import GradientIcon from "@material-ui/icons/Gradient"; // Edelmetall
import HouseIcon from "@material-ui/icons/House"; // Alarmanlage
import HttpsIcon from "@material-ui/icons/Https"; // Edelmetall
import SecurityIcon from "@material-ui/icons/Security"; //
import TimelineIcon from "@material-ui/icons/Timeline"; //
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"; //

import React from "react";
import { Paper, Container, Theme, createStyles } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import myTheme from "../MyTheme/MyTheme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      padding: 20,
      ...myTheme.cards.lightGreen,
    },
    card: {
      ...myTheme.cards.lightGreen,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "auto",
      maxWidth: 600,
    },
    cardContent: {
      display: "flex",
      flexGrow: 0.5,
      // flexDirection: "row",
      // justifyContent: "left",
      margin: 0,
      textAlign: "left",
    },
    right: {
      display: "flex",
      flex: 2,
      flexDirection: "column",
      margin: 0,
      paddingRight: 0,
    },
    left: {
      flex: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    icon: {
      display: "flex",
      fontSize: "4rem",
      alignSelf: "flex-start",
      backgroundColor: "white",
      objectFit: "contain",
      borderRadius: 5,
    },
    body: {
      paddingTop: 12,
      fontFamily: myTheme.title.fontFamily,
    },
    pos: {
      marginBottom: 12,
    },
    features: {
      display: "flex",
      flexDirection: "column",
    },
    feature: {
      display: "flex",
      alignItems: "center",
    },
    featureIcon: {
      flex: 1,
      marginRight: theme.spacing(1),
    },
    featureText: {
      flex: 10,
    },
  })
);

const features: string[] = [
  "Komplette Fensterabsicherung: Rahmen und Glas",
  "Intuitive Steuerung über HomeKit, Siri oder eine Vielzahl anderer Möglichkeiten",
  "Nachträglich nachrüstbar",
  "Autarke, updatefähige ZentralBox Made in Germany",
  "Endlose Möglichkeiten: Garagentore, Licht, Steckdosen, Thermostate, Kameras, Haustüren, Türklingeln",
  "Sichere Datenübertragung in Echtzeit",
];

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Container className={classes.left}>
            <HouseIcon className={classes.icon} />
            <VerifiedUserIcon className={classes.icon} />
          </Container>
          <Container className={classes.right}>
            <Typography
              variant="h5"
              style={{ ...myTheme.title }}
              component="h2"
            >
              Sicherheit für Ihr Eigentum mit einer Alarmanlage von Eimsig{" "}
            </Typography>
            <Typography className={classes.body} variant="body1">
              Von Besichtigung über Beratung zur Installion. Ich wickle den
              gesamten Prozess für Sie ab, damit Ihr Eigentum schnellstens
              sicher ist! In Deutschland passieren etwa 100.000
              Wohnungseinbrüche pro Jahr{" "}
              <a
                href="https://www.bka.de/DE/AktuelleInformationen/StatistikenLagebilder/PolizeilicheKriminalstatistik/PKS2018/InteraktiveKarten/07Wohnungseinbruchdiebstahl/07_Wohnungseinbruchdiebstahl_node.html"
                rel="nofollow"
              >
                (zur Statistik vom BKA für 2018)
              </a>
              .
              <Container className={classes.features}>
                {" "}
                {features.map((feature) => (
                  <Container className={classes.feature}>
                    <VerifiedUserIcon
                      className={classes.featureIcon}
                    ></VerifiedUserIcon>
                    <Typography className={classes.featureText}>
                      {feature}
                    </Typography>
                  </Container>
                ))}
              </Container>
              <a href="#kontakt">Klicken Sie hier, um mehr zu erfahren.</a>
            </Typography>
          </Container>
        </CardContent>
      </Card>
    </Container>
  );
}
