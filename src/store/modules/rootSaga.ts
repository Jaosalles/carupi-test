import { all } from 'redux-saga/effects';

import games from './games/sagas';

export default function* rootSaga() {
  return yield all([games]);
}
