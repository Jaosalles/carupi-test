import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import * as Helper from '../../../utils/helper';
import * as UserActions from './actions';
import { GamesTypes } from './types';

interface IGamesList {
  payload: {
    page?: string;
    search?: string;
  };
  type: string;
}

function* gamesList({ payload: { page, search } }: IGamesList) {
  try {
    const {
      data: { next, previous, results },
    } = yield call(api.get, 'games', {
      params: { page, search },
    });

    yield put(UserActions.listSuccess(results, previous, next));
  } catch (err) {
    yield put(UserActions.listFailure());
    Helper.error(err, 'Falha ao listar os jogos');
  }
}

interface IGamesShow {
  payload: {
    id: string;
  };
  type: string;
}

function* gamesShow({ payload: { id } }: IGamesShow) {
  try {
    const { data } = yield call(api.get, `games/${id}`);

    yield put(UserActions.showSuccess(data));
  } catch (err) {
    yield put(UserActions.showFailure());
    Helper.error(err, 'Falha ao trazer informações do parceiro');
  }
}

export default all([
  takeLatest(GamesTypes.LIST_REQUEST, gamesList),
  takeLatest(GamesTypes.SHOW_REQUEST, gamesShow),
]);
