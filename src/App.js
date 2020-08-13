import React from "react";
import { Route } from "react-router-dom";
import Data from "./components/data";
import EpisodeDetail from "./components/Episodes/EpisodeDetail";
import CharacterDetail from "./components/Characters/CharacterDetail";
import LocationDetail from "./components/Locations/LocationDetail";
import Homepage from "./components/Homepage";
import "./css/app.css";
function App() {
  return (
    <div>
      <h1>Rick and Morty App</h1>

      <Route exact path="/" component={Homepage} />
      <Route exact path="/data" component={Data} />
      <Route exact path="/episode/:id" component={EpisodeDetail} />
      <Route exact path="/character/:id" component={CharacterDetail} />
      <Route exact path="/location/:id" component={LocationDetail} />
    </div>
  );
}

export default App;
