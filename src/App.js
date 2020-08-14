import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import EpisodeDetail from "./components/Episodes/EpisodeDetail";
import CharacterDetail from "./components/Characters/CharacterDetail";
import LocationDetail from "./components/Locations/LocationDetail";
import LandingPage from "./components/LandingPage";
import "./css/app.css";
import { Typography } from "@material-ui/core";
function App() {
  return (
    <div>
      <Typography
        variant="h4"
        style={{
          color: "rgba(0,150,190)",
          display: "flex",
          justifyContent: "center",
          paddingTop: "2%",
          paddingBottom: "5% ",
          fontFamily: "Dosis, sans-serif",
          letterSpacing: "5px",
        }}
      >
        Rick and Morty Info App
      </Typography>

      <Route exact path="/" component={LandingPage} />
      <Route exact path="/homepage" component={HomePage} />
      <Route exact path="/episode/:id" component={EpisodeDetail} />
      <Route exact path="/character/:id" component={CharacterDetail} />
      <Route exact path="/location/:id" component={LocationDetail} />
    </div>
  );
}

export default App;
