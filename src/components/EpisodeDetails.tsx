import React, { Fragment } from 'react';
import { Store } from '../Store';
import { IEpisode } from '../interfaces';

const EpisodeDetails = (props: any) => {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    getEpisode();
  }, []);

  const getEpisode = () => {
    const { id } = props.match.params;
    console.log(parseInt(id));
    const slicedEpisode: IEpisode = state.episodes.find(
      (ep: IEpisode) => ep.id === parseInt(id),
    );
    return dispatch({
      type: 'GET_ONE_EPISODE',
      payload: slicedEpisode,
    });
  };

  return (
    <Fragment>
      {state.episodet && (
        <section>
          <img src={state.episode.image.original} alt={state.episode.name} />
          <section>
            <div>{state.episode.name}</div>
            <div>
              <p>{state.episode.summary}</p>
            </div>
          </section>
        </section>
      )}
    </Fragment>
  );
};

export default EpisodeDetails;
