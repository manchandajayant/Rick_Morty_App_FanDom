import { combineReducers } from "redux";
import episodes from "./episodesReducer";
import episode from "./episodeReducer";

export default combineReducers({
  episodes,
  episode,
});
