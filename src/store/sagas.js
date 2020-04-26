import { fork } from 'redux-saga/effects';
import homeSagas from './home/homeSagas';
// import someOtherSagas from './someOther/sagas';

/**
 * rootSaga
 */
export default function* rootSaga() {
  yield fork(homeSagas)
  // yield fork(someOtherSagas)
}
