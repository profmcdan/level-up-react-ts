/**
|--------------------------------------------------
| All interfaces
|--------------------------------------------------
*/

export interface IEpisode {
  id: number;
  airdate: string;
  airstamp: string;
  airtime: string;
  image: {
    medium: string;
    original: string;
  };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
}

export interface IState {
  episodes: Array<IEpisode>;
  favorites: Array<IEpisode>;
  episode: object;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IEpisodeProps {
  episodes: Array<IEpisode>;
  favorites: Array<IEpisode>;
  toggleFavAction: (episode: IEpisode) => IAction;
  fetchDataAction: () => {};
}
