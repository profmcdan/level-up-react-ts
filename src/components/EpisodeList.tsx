import React from 'react';
import { Store } from '../Store';
import { IEpisode, IAction } from '../interfaces';
import { Link } from 'react-router-dom';

const URL: string =
  'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

const EpisodeList = () => {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  }, []);

  const fetchDataAction = async () => {
    const response = await fetch(URL);
    const { _embedded } = await response.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: _embedded.episodes,
    });
  };

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favorites.includes(episode);
    if (episodeInFav) {
      const newFavorites = state.favorites.filter(
        (fav: IEpisode) => fav.id !== episode.id,
      );
      return dispatch({
        type: 'REMOVE_FAV',
        payload: newFavorites,
      });
    } else {
      return dispatch({
        type: 'ADD_FAV',
        payload: episode,
      });
    }
  };

  return (
    <React.Fragment>
      <section className="episode-layout">
        {state.episodes.map((episode: IEpisode) => (
          <section key={episode.id} className="episode-box">
            {episode.image && (
              <Link to={`/episode/{episode.id}`}>
                <img src={episode.image.medium} alt={episode.name} />
              </Link>
            )}
            <div>{episode.name}</div>
            <section
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div>
                Season: {episode.season} Number: {episode.number}
              </div>
              <button type="button" onClick={() => toggleFavAction(episode)}>
                {state.favorites.find((fav: IEpisode) => fav.id === episode.id)
                  ? 'UnFav'
                  : 'Fav'}
              </button>
            </section>
          </section>
        ))}
      </section>
    </React.Fragment>
  );
};

export default EpisodeList;
