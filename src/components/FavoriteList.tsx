import React, { Fragment } from 'react';
import { IEpisode } from '../interfaces';
import { Store } from '../Store';

export default function FavoriteList() {
  const { state } = React.useContext(Store);

  return (
    <Fragment>
      <section className="episode-layout">
        {state.favorites.map((episode: IEpisode) => (
          <section key={episode.id} className="episode-box">
            {episode.image && (
              <img src={episode.image.medium} alt={episode.name} />
            )}
            <div>{episode.name}</div>
            <section
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div>
                Season: {episode.season} Number: {episode.number}
              </div>
            </section>
          </section>
        ))}
      </section>
    </Fragment>
  );
}
