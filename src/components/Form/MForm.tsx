import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
} from "@material-ui/core";
import { isMobile } from "react-device-detect";

import axios from "axios";
import myTheme from "../MyTheme/MyTheme";

// import HouseIcon from "@material-ui/icons/House";
// import DeviceHubIcon from "@material-ui/icons/DeviceHub";
// import LiveHelpIcon from "@material-ui/icons/LiveHelp";

// const labels = (
//   text: string,
//   label: <DeviceHubIcon> | <HouseIcon>
// ) => (
//   <div>
//     {label}
//     {text}
//   </div>
// );

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const subjects = [
  {
    value: "Edelmetalle",
    label: "Edelmetalle",
  },
  {
    value: "Alarmanlagen",
    label: "Alarmanlagen",
  },
  {
    value: "Sonstiges",
    label: "Sonstiges",
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: isMobile ? 20 : 40,
      paddingBottom: isMobile ? 20 : 40,
      paddingLeft: isMobile ? 0 : 40,
      paddingRight: isMobile ? 0 : 40,
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "90%",
      },
      "& .MuiFormControlLabel-label": {
        lineHeight: isMobile ? "110%" : "auto",
      },
    },
    buttonRow: {
      color: "black",
      display: isMobile ? "block" : "flex",
      textAlign: isMobile ? "left" : "center",
      width: "90%",
      justifyContent: "space-between",
      margin: "auto",
      paddingTop: isMobile ? "auto" : 10,
    },
    button: {
      ...myTheme.button,
      width: isMobile ? "100%" : 400,
      height: isMobile ? 50 : "auto",
    },
  })
);

export default function MForm() {
  const classes = useStyles();
  const [subject, setSubject] = useState("Sonstiges");
  const [email, setEmail] = useState(false);
  const [name, setName] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [button, setButton] = useState(false); // TODO
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok: any, msg: any, form: any) => {
    setServerState({
      submitting: false,
      status: { ok, msg } as any,
    });
    if (ok) {
      form.reset();
    }
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(Boolean(event.target.value));
  };
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckbox(event.target.checked);
  };
  const handleEmailChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.persist();
    await sleep(1000);
    setEmail(
      // eslint-disable-next-line no-control-regex
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(
        event?.target?.value
      )
    );
  };
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    setButton(true);
    event.preventDefault();
    console.log(email, name, checkbox, event.target);
    if (email && name && checkbox) {
      const form = event.target;
      setServerState({ submitting: true, status: null });
      axios({
        method: "post",
        url: "https://formspree.io/mbjavdke",
        data: new FormData(form),
      })
        .then((r) => {
          handleServerResponse(true, "Thanks!", form);
        })
        .catch((r) => {
          handleServerResponse(false, r.response.data.error, form);
        });
    }
  };

  return (
    <form className={classes.root} autoComplete="on" onSubmit={handleSubmit}>
      <TextField
        id="outlined-select-subject"
        select
        name="subject"
        label="Betreff"
        value={subject}
        onChange={handleSubjectChange}
        helperText="Bitte wählen Sie den Betreff aus."
        defaultValue="Sonstiges"
        required
        variant="outlined"
      >
        {subjects.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="form-name"
        label="Name (erforderlich)"
        type="text"
        name="name"
        onChange={handleNameChange}
        error={button && !name}
        helperText={button && !name ? "Diese Angabe ist notwendig." : ""}
        variant="outlined"
        required
      />
      <TextField
        id="form-mail"
        label="Email (erforderlich)"
        type="email"
        name="email"
        onChange={handleEmailChange}
        error={!email && button}
        helperText={
          !email && button
            ? "Diese Angabe ist notwendig und aktuell ungültig."
            : ""
        }
        variant="outlined"
        required
      />
      <TextField
        id="form-phone"
        label="Telefonnummer"
        type="tel"
        name="tel"
        variant="outlined"
        helperText="Diese Angabe ist freiwillig."
      />
      <TextField
        id="form-message"
        label="Nachricht"
        name="message"
        multiline
        rows={4}
        variant="outlined"
      />
      <div className={classes.buttonRow}>
        <FormControl required error={button && !checkbox} component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  required
                  checked={checkbox}
                  onChange={handleCheckboxChange}
                  name="checkbox"
                  color={button && !checkbox ? "secondary" : "primary"}
                  style={{
                    color: button && !checkbox ? "red" : "auto",
                    paddingBottom: isMobile ? 20 : "auto",
                  }}
                />
              }
              label="Ich stimme ich der Übermittlung meiner Daten zu."
            />
          </FormGroup>
          <FormHelperText>
            {button && !checkbox
              ? "Bitte stimmen Sie der Zusendung Ihrer Daten zu."
              : ""}
          </FormHelperText>
        </FormControl>
        <Button
          type="submit"
          value="Submit"
          variant="contained"
          color="primary"
          disabled={serverState.submitting}
          className={classes.button}
        >
          Abschicken
        </Button>
      </div>
    </form>
  );
}
