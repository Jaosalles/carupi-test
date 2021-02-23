import { action } from 'typesafe-actions';

import { GamesTypes } from './types';

export const listRequest = (page = 1, search = '') =>
  action(GamesTypes.LIST_REQUEST, { page, search });
export const listSuccess = (data: [], previous: string, next: string) =>
  action(GamesTypes.LIST_SUCCESS, { data, previous, next });
export const listFailure = () => action(GamesTypes.LIST_FAILURE);

export const showRequest = (id: string) =>
  action(GamesTypes.SHOW_REQUEST, { id });
export const showSuccess = (data: {}) =>
  action(GamesTypes.SHOW_SUCCESS, { data });
export const showFailure = () => action(GamesTypes.SHOW_FAILURE);
