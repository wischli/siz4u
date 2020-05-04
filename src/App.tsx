import React from "react";
import "./App.css";
import "./cards.css";
import "./global.css";
import AppBar from "./components/AppBar/AppBar";
import Welcome from "./components/welcome/Welcome";
import Datenschutz from "./components/privacy/Datenschutz";
import MForm from "./components/Form/Contact";
import Security from "./components/Services/Security";
import GoldSilver from "./components/Services/GoldSilver";
import { ThemeProvider, Container } from "@material-ui/core";
import { theme } from "./components/MyTheme/MyTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Container style={{ background: "#e6e6e6", minWidth: "100%" }}>
        <Welcome />
      </Container>
      <Container style={{ background: "#ffffff", minWidth: "100%" }}>
        <Security />
      </Container>
      <Container style={{ background: "#e6e6e6", minWidth: "100%" }}>
        <GoldSilver />
      </Container>
      <Container style={{ background: "#ffffff", minWidth: "100%" }}>
        <MForm />
      </Container>
      <Container style={{ background: "#e6e6e6", minWidth: "100%" }}>
        <Datenschutz />
      </Container>
    </ThemeProvider>
  );
}

export default App;
