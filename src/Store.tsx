import React, { createContext } from 'react';

interface IState {
  episodes: string[];
  favorites: string[];
}

const initialState: IState = {
  episodes: [],
  favorites: [],
};

export const Store = createContext<IState>(initialState);

export const reducer = () => {};

export const StoreProvider = (props: any) => {
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>;
};
