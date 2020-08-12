import { EPISODES_FETCHED } from "./actions";

const initialState = [];

export default function episodesReducer(state = initialState, action) {
  switch (action.type) {
    case EPISODES_FETCHED: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
