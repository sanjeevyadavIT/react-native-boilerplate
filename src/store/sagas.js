import { all } from 'redux-saga/effects';
import homeSagas from './home/sagas';

export default function* rootSaga() {
  yield all([
    ...homeSagas,
  ]);
}
