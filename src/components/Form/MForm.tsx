import React from "react";
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
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "90%",
      },
    },
    buttonRow: {
      display: "flex",
      width: "90%",
      justifyContent: "space-between",
      margin: "auto",
    },
  })
);

export default function MForm() {
  const classes = useStyles();
  const [subject, setSubject] = React.useState("Sonstiges");
  const [email, setEmail] = React.useState(false);
  const [name, setName] = React.useState(false);
  const [checkbox, setCheckbox] = React.useState(false);
  const [button, setButton] = React.useState(false);

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
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(event?.target?.value)
    );
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setButton(true);
    if (!email) {
      console.log("Email fehlt");
    }
    if (!name) {
      console.log("Name fehlt");
    }
    if (!checkbox) {
      console.log("Bitte stimmen Sie der Zusendung Ihrer Daten zu.");
    }
    if (email && name && checkbox) {
      console.log(true);
    }
    console.log(false);
  };

  return (
    <form className={classes.root} autoComplete="on">
      <TextField
        id="outlined-select-subject"
        select
        label="Betreff"
        value={subject}
        onChange={handleSubjectChange}
        helperText="Bitte wählen Sie den Betreff aus"
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
        label="Name"
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
        label="Email"
        type="email"
        name="email"
        onChange={handleEmailChange}
        error={email || (button && !email)}
        helperText={
          email || (button && !email)
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
        multiline
        rows={4}
        variant="outlined"
      />
      <div className={classes.buttonRow}>
        <FormControl
          required
          error={button && !checkbox}
          component="fieldset"
          // className={classes.formControl}
        >
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkbox}
                  onChange={handleCheckboxChange}
                  name="checkbox"
                  color={button && !checkbox ? "secondary" : "primary"}
                  style={button && !checkbox ? { color: "red" } : {}}
                />
              }
              label="Hiermit stimme ich der Übermittlung meiner Daten zu."
            />
          </FormGroup>
          <FormHelperText>
            {button && !checkbox
              ? "Bitte stimmen Sie der Zusendung Ihrer Daten zu."
              : ""}
          </FormHelperText>
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Abschicken
        </Button>
      </div>
    </form>
  );
}
