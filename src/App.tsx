import * as React from 'react';
import { Store } from './Store';
import { IEpisode, IAction } from './interfaces';

// import axios from 'axios';

const URL: string =
  'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

const App: React.FC = () => {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  }, []);

  const fetchDataAction = async () => {
    const response = await fetch(URL);
    const { _embedded } = await response.json();
    // console.log(_embedded.episodes);
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
      {console.log(state)}
      <header className="header">
        <h1>Rick and Morty</h1>
        <p>Pick your favorite episode!!!</p>
      </header>

      <section className="episode-layout">
        {state.episodes.map((episode: IEpisode) => (
          <section key={episode.id} className="episode-box">
            {episode.image && (
              <img src={episode.image.medium} alt={episode.name} />
            )}
            <div>{episode.name}</div>
            <section>
              <div>
                Season: {episode.season} Number: {episode.number}
              </div>
              <button type="button" onClick={() => toggleFavAction(episode)}>
                Fav
              </button>
            </section>
          </section>
        ))}
      </section>
    </React.Fragment>
  );
};

export default App;
