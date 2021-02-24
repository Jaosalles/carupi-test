import produce, { Draft } from 'immer';
import { Reducer } from 'redux';

import { GamesState, GamesTypes } from './types';

const INITIAL_STATE: GamesState = {
  data: {
    list: [],
    next: '',
    previous: '',

    info: {
      id: '',
      name: '',
      description_raw: '',
      image: '',
    },
  },
};

const user: Reducer<GamesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GamesTypes.LIST_REQUEST:
      return produce(state, (draft: Draft<GamesState>) => {
        draft.data.list = [];
        draft.data.next = '';
        draft.data.previous = '';
      });

    case GamesTypes.LIST_SUCCESS:
      return produce(state, (draft: Draft<GamesState>) => {
        const { data, next, previous } = action.payload;

        draft.data.list = data;
        draft.data.next = next;
        draft.data.previous = previous;
      });

    case GamesTypes.SHOW_REQUEST:
      return produce(state, (draft: Draft<GamesState>) => {
        draft.data.info.id = '';
        draft.data.info.name = '';
        draft.data.info.description_raw = '';
        draft.data.info.image = '';
      });

    case GamesTypes.SHOW_SUCCESS:
      return produce(state, (draft: Draft<GamesState>) => {
        const { data } = action.payload;

        const dataFormatted = {
          ...data,
          image: data.background_image,
        };

        draft.data.info = dataFormatted;
      });

    default:
      return state;
  }
};

export default user;
