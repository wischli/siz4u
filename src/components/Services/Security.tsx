import HouseIcon from "@material-ui/icons/House"; // Alarmanlage
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"; //

import React, { useRef } from "react";
import { Container, Theme, createStyles } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import myTheme from "../MyTheme/MyTheme";
import { isMobile } from "react-device-detect";
// @ts-ignore
import eimsigPdf from "../../static/siz4u-eimsig.pdf";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      textAlign: "left",
      ...myTheme.cards.white,
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
    features: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 20,
      paddingBottom: 20,
    },
    feature: {
      display: "flex",
      alignItems: "center",
      margin: isMobile ? theme.spacing(0.5) : theme.spacing(1),
      padding: isMobile ? 0 : 0,
    },
    featureIcon: {
      marginRight: theme.spacing(1),
    },
    featureText: {
      flex: 10,
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
  const myRef = useRef();
  const classes = useStyles();
  console.log(myRef);

  return (
    <Container className={classes.root} innerRef={myRef}>
      <Container className={classes.title}>
        <HouseIcon className={classes.icon} />
        <Typography variant="h3" style={{ ...myTheme.title }} component="h3" id="alarmanlagen">
          Sicherheit für Ihr Eigentum mit einer Alarmanlage von Eimsig{" "}
        </Typography>
      </Container>
      <Typography className={classes.body} variant="h5">
        Von Besichtigung über Beratung zur Installion - Ich wickle den gesamten Prozess für Sie ab.
      </Typography>
      <Typography className={classes.body} variant="body1">
        In Deutschland passieren etwa 100.000 Wohnungseinbrüche pro Jahr (
        <a
          href="https://www.bka.de/DE/AktuelleInformationen/StatistikenLagebilder/PolizeilicheKriminalstatistik/PKS2018/InteraktiveKarten/07Wohnungseinbruchdiebstahl/07_Wohnungseinbruchdiebstahl_node.html"
          rel="nofollow"
        >
          Statistik vom BKA für 2018
        </a>
        ). Gehen Sie sicher, dass Sie zukünftig nicht dazu gehören - Sichern Sie Ihr Eigentum ab mit einer{" "}
        <a href="https://www.eimsig.de/?gclid=CO2Qz-eQ-csCFVTnGwod9kwLEw" target="_blank" rel="noopener noreferrer">
          Alarmanlage von Eimsig
        </a>{" "}
        !
      </Typography>
      <Container className={classes.features}>
        {" "}
        {features.map((feature) => (
          <Container className={classes.feature}>
            <VerifiedUserIcon className={classes.featureIcon} color="primary"></VerifiedUserIcon>
            <Typography className={classes.featureText}>{feature}</Typography>
          </Container>
        ))}
      </Container>
      <Container>
        <Button variant="contained" color="secondary" className={classes.button}>
          <a
            href="https://www.eimsig.de/?gclid=CO2Qz-eQ-csCFVTnGwod9kwLEw"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", background: "none" }}
          >
            <span role="img" aria-label="left-pointing finger">
              👉
            </span>
            Mehr Informationen zu Eimsig{" "}
            <span role="img" aria-label="right-pointing finger">
              👈
            </span>
          </a>
        </Button>
        <Button variant="contained" color="secondary" className={classes.button}>
          <a href={eimsigPdf} style={{ textDecoration: "none", background: "none" }}>
            <span role="img" aria-label="left-pointing finger">
              👉
            </span>
            Zur Exklusiven SiZ4u.de Broschüre
            <span role="img" aria-label="right-pointing finger">
              👈
            </span>
          </a>
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {
            window.location.href = "#kontakt";
          }}
        >
          Lassen Sie sich beraten
        </Button>
      </Container>
    </Container>
  );
}
