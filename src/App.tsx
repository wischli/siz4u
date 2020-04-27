import React from "react";
import "./App.css";
import "./components/AppBar/AppBar.styling.css";
import "./cards.css";
import "./global.css";
import AppBar from "./components/AppBar/AppBar";
import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
// import ContactMe from './components/contact/ContactMe'
import Datenschutz from "./components/privacy/Datenschutz";
import MForm from "./components/Form/MForm";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./components/MyTheme/MyTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div id="menuOuterContainer" className="App">
        <AppBar />
        <main id="menuPageWrap">
          <Header />
          <Welcome />
          <MForm />
          <Datenschutz />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
