import { EPISODE_FETCHED } from "./actions";

const initialState = null;

export default function episodeReducer(state = initialState, action) {
  switch (action.type) {
    case EPISODE_FETCHED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
