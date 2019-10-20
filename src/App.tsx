import React, { Fragment } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Store } from './Store';
import Header from './components/Header';
import EpisodeDetails from './components/EpisodeDetails';
import FavoriteList from './components/FavoriteList';

const EpisodeList = React.lazy(() => import('./components/EpisodeList'));

// import axios from 'axios';

const App: React.FC = () => {
  const { state } = React.useContext(Store);

  return (
    <Router>
      <Fragment>
        {console.log(state)}
        <Header favorites={state.favorites} />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Route exact component={EpisodeList} path="/" />
          <Route exact component={EpisodeDetails} path="/episode/:id" />
        </React.Suspense>

        <Route exact component={FavoriteList} path="/favorites" />
      </Fragment>
    </Router>
  );
};

export default App;
