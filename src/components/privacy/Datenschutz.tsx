import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div>
          <h3>Webseitenbetreiber</h3>
          Anbieter der Seite siz4u.de ist Herr André Wischlinsky, 12623
          Berlin (im Folgenden „Eigentümer“). Der Eigentümer ist für eigene
          Inhalte auf dieser Webseite verantwortlich. Die Webseite enthält
          Verlinkungen zu fremden Inhalten. Der Eigentümer ist nicht
          Anbieter der verlinkten Seiten und hat auf die dort dargestellten
          Inhalte keinen Einfluss.
            </div>
        <div className='welcome-card'>
          <h3>Datenschutz</h3>
          <div className='welcome-1'>
            Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig. Der
            Eigentümer hält die anwendbaren Bestimmungen des
            Datenschutzrechts ein. Um diese Homepage zu besuchen, ist weder
            eine Registrierung noch die Angabe von personenbezogene Daten
            notwendig.
              </div>
          <div className='welcome-2'>
            Ihre Daten verwenden wir nur, soweit Sie uns dies erlaubt haben.
            Selbstverständlich achten wir bei der Verwendung Ihrer Daten auf
            die Einhaltung datenschutzrechtlicher Bestimmungen –
            insbesondere des Bundesdatenschutzgesetztes sowie des
            Telemediengesetzes. Personenbezogene Daten sind Einzelangaben
            über persönliche und sachliche Verhältnisse einer bestimmten
            oder bestimmbaren Person (§ 3 Abs. 1 Bundesdatenschutzgesetz),
            also Daten, die Rückschlüsse auf eine Person zulassen. Diese
            Daten werden von uns nur erhoben oder gespeichert, wenn Sie uns
            die Daten freiwillig, beispielsweise bei Kontaktaufnahme
            Ihrerseits, mitteilen.
              </div>
          <div className='welcome-3'>
            Auf der gesamten Webseite werden keine Cookies verwendet.
              </div>
          <div className='welcome-3'>
            <h3>Auskunftsrecht & Impressum</h3>
            Auskunft über die von uns über Sie vorhandenen Daten erhalten
            Sie jederzeit auf schriftliche Anfrage an:
                <br />
            Andre Wischlinsky,
                <br />
            Ridbacher Straße 5,
                <br />
            12623 Berlin
                <p>
              Oder per E-Mail an{' '}
              <a href='mailto:andre.wischlinsky@gmx.de'>
                andre.wischlinsky@gmx.de
                  </a>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
