import React from "react";
import { Route } from "react-router-dom";

import { Typography } from "@material-ui/core";

import HomePage from "./components/HomePage/HomePage";
import EpisodeDetail from "./components/Episodes/EpisodeDetail";
import CharacterDetail from "./components/Characters/CharacterDetail";
import LocationDetail from "./components/Locations/LocationDetail";
import LandingPage from "./components/LandingPage/LandingPage";
import ShowAllLocations from "./components/Locations/ShowAllLocations";
import ShowAllEpisodes from "./components/Episodes/ShowAllEpisodes";
import NavBar from "./components/Navbar/NavBar";
import Spotifyplayer from "./components/Spotifyplayer";

function App() {
  return (
    <div>
      <NavBar />
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
      <Spotifyplayer />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/homepage" component={HomePage} />
      <Route exact path="/location" component={ShowAllLocations} />
      <Route exact path="/episode" component={ShowAllEpisodes} />
      <Route exact path="/episode/:id" component={EpisodeDetail} />
      <Route exact path="/character/:id" component={CharacterDetail} />
      <Route exact path="/location/:id" component={LocationDetail} />
    </div>
  );
}

export default App;
