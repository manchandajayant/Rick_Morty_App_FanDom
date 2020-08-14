import React from "react";
import SpotifyPlayer from "react-spotify-player";

const size = {
  width: "100%",
  height: 200,
};
const view = "coverart"; // or 'coverart'
const theme = "black"; // or 'white'

const Spotifyplayer = () => {
  return (
    <div>
      <SpotifyPlayer
        uri="spotify:album:3KapDfR6qHEKi4RBDpn19M"
        size={size}
        view={view}
        theme={theme}
      />
    </div>
  );
};

export default Spotifyplayer;
