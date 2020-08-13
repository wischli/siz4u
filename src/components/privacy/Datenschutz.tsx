import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Container, Theme, createStyles, Typography } from "@material-ui/core";
import myTheme from "../MyTheme/MyTheme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      textAlign: "center",
      ...myTheme.cards.lightGrey,
    },
    text: {
      margin: "20px auto",
    },
  })
);

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Container>
        <Typography variant="h5">Webseitenbetreiber</Typography>
        <Typography className={classes.text} variant="body1">
          Anbieter der Seite siz4u.de ist Herr André Wischlinsky, 12623 Berlin (im Folgenden „Eigentümer“). Der
          Eigentümer ist für eigene Inhalte auf dieser Webseite verantwortlich. Die Webseite enthält Verlinkungen zu
          fremden Inhalten. Der Eigentümer ist nicht Anbieter der verlinkten Seiten und hat auf die dort dargestellten
          Inhalte keinen Einfluss.
        </Typography>
        <Typography variant="h5" id="datenschutz">
          Datenschutz
        </Typography>
        <Typography className={classes.text} variant="body1">
          Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig. Der Eigentümer hält die anwendbaren Bestimmungen des
          Datenschutzrechts ein. Um diese Homepage zu besuchen, ist weder eine Registrierung noch die Angabe von
          personenbezogene Daten notwendig.
        </Typography>
        <Typography className={classes.text} variant="body1">
          Ihre Daten verwenden wir nur, soweit Sie uns dies erlaubt haben. Selbstverständlich achten wir bei der
          Verwendung Ihrer Daten auf die Einhaltung datenschutzrechtlicher Bestimmungen – insbesondere des
          Bundesdatenschutzgesetztes sowie des Telemediengesetzes. Personenbezogene Daten sind Einzelangaben über
          persönliche und sachliche Verhältnisse einer bestimmten oder bestimmbaren Person (§ 3 Abs. 1
          Bundesdatenschutzgesetz), also Daten, die Rückschlüsse auf eine Person zulassen. Diese Daten werden von uns
          nur erhoben oder gespeichert, wenn Sie uns die Daten freiwillig, beispielsweise bei Kontaktaufnahme
          Ihrerseits, mitteilen.
        </Typography>
        <Typography className={classes.text} variant="body1">
          Auf der gesamten Webseite werden keine Cookies verwendet.
        </Typography>
        <Typography variant="h5" id="impressum">
          Auskunftsrecht & Impressum
        </Typography>
        <Typography className={classes.text} variant="body1">
          Auskunft über die von uns über Sie vorhandenen Daten erhalten Sie jederzeit auf schriftliche Anfrage an:
          <br />
          Andre Wischlinsky,
          <br />
          Ridbacher Straße 5,
          <br />
          12623 Berlin
          <p>
            Oder per E-Mail an <a href="mailto:info@siz4u.de">info@siz4u.de</a>
          </p>
        </Typography>
      </Container>
    </Container>
  );
}
