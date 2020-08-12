import request from "superagent";
export const EPISODES_FETCHED = "EPISODES_FETCHED";
export const EPISODE_FETCHED = "EPISODE_FETCHED";

const baseUrl = "https://rickandmortyapi.com/api";

const allEpisodesFetched = (episodes) => ({
  type: EPISODES_FETCHED,
  payload: episodes,
});

export const showAllEpisodes = () => (dispatch) => {
  request(`${baseUrl}/episode`)
    .then((res) => {
      const action = allEpisodesFetched(res.body);
      console.log(action);
      dispatch(action);
    })
    .catch(console.error);
};

const oneEpisodeFetched = (episode) => ({
  type: EPISODE_FETCHED,
  payload: episode,
});

export const episodeFetch = (id) => (dispatch) => {
  request(`${baseUrl}/episode/${id}`)
    .then((res) => {
      const action = oneEpisodeFetched(res.body);

      dispatch(action);
    })
    .catch(console.error);
};
