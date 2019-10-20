import React, { createContext, useReducer } from 'react';
import { IState, IAction, IEpisode } from './interfaces';

const initialState: IState = {
  episodes: [],
  favorites: [],
  episode: {},
};

export const Store = createContext<IState | any>(initialState);

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };
    case 'ADD_FAV':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FAV':
      return { ...state, favorites: action.payload };
    case 'GET_ONE_EPISODE':
      return { ...state, episode: action.payload };
    default:
      return state;
  }
};

export const StoreProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
