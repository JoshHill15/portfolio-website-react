import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage"
import Work from "./components/Work";
import { Route } from "react-router-dom"
import FirstProject from "./projects/FirstProject";


function App() {

  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/" component={Work} />
    </div>
  );
}

export default App;
