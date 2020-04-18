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

function App() {
  return (
    <div id="menuOuterContainer" className="App">
      <AppBar />
      <main id="menuPageWrap">
        <Header />
        <div className="my-cards">
          <Welcome />
          {/* <ContactMe /> */}
          <Datenschutz />
        </div>
      </main>
    </div>
  );
}

export default App;
