import React from "react";
import { Route } from "react-router-dom";
import Episodes from "./components/showAllEpisodes";
import EpisodeDetail from "./components/EpisodeDetail";
import CharacterDetail from "./components/CharacterDetail";

function App() {
  return (
    <div className="App">
      <h1>Rick and Morty App</h1>
      <Route exact path="/episodes" component={Episodes} />
      <Route exact path="/episodes/:id" component={EpisodeDetail} />
      <Route exact path="/characters/:id" component={CharacterDetail} />
    </div>
  );
}

export default App;
