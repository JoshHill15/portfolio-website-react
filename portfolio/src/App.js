import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage"
import Work from "./components/Work";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <LandingPage />
      <Work />
    </div>
  );
}

export default App;
