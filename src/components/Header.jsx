import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ favorites }) {
  return (
    <Fragment>
      <header className="header">
        <Link to="/">
          <h1>Rick and Morty</h1>
        </Link>
        <Link to="favorites">Favorites: {favorites.length}</Link>
      </header>
    </Fragment>
  );
}
