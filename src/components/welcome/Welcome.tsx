import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { CardHeader } from '@material-ui/core';

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

export default function Welcome() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title='Willkommen'
        subheader='Ich bin Ihr zertifizierter Partner der Firma EIMSIG Alarmanlagen'
      />
      <CardContent>
        <div className='welcome-card'>
          <div className='welcome-1'>
            In dem familiengeführten, mittelständischen Unternehmen setzen
            wir mit unserem freundlichen und kompetenten Team tagtäglich
            alles daran, das Leben und Wohnen unserer Kunden sicherer,
            komfortabler und energiesparender zu gestalten.
              </div>
          <div className='welcome-2'>
            Ihre Sicherheit liegt uns am Herzen. Wir bieten Ihnen einen auf
            Sie abgestimmten, idealen Einbruchsschutz auf höchstem Niveau.
            Unsere Produkte sind ästhetisch und benutzerfreundlich. Und Sie
            werden sehen: Sicherheit ist bei uns keine Frage des Geldes.
              </div>
          <div className='welcome-3' id='survey'>
            Ihr Ansprechpartner,
                <br />
            André Wischlinsky
              </div>
        </div>
      </CardContent>
    </Card>
  );
}
