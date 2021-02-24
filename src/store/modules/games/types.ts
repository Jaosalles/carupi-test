/**
 * Actions Types
 */
export enum GamesTypes {
  LIST_REQUEST = '@partner/LIST_REQUEST',
  LIST_SUCCESS = '@partner/LIST_SUCCESS',
  LIST_FAILURE = '@partner/LIST_FAILURE',

  SHOW_REQUEST = '@partner/SHOW_REQUEST',
  SHOW_SUCCESS = '@partner/SHOW_SUCCESS',
  SHOW_FAILURE = '@partner/SHOW_FAILURE',
}

/**
 * Reducer Data Types
 */
export interface GamesList {
  id: string;
  name: string;
  slug: string;
  background_image: string;
  rating: string;
}

export interface GamesInfo {
  id: string;
  name: string;
  description_raw: string;
  image: string;
}

export interface Games {
  list: GamesList[];
  next: string;
  previous: string;

  info: GamesInfo;
}

/**
 * Reducer State Types
 */
export interface GamesState {
  readonly data: Games;
}
