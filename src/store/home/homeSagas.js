import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { api } from '../../api';
import {
  TRENDING_REPO_REQUEST,
  TRENDING_REPO_LOADING,
  TRENDING_REPO_SUCCESS,
  TRENDING_REPO_ERROR,
} from './homeActions';

// worker saga: Fetch Trending repositories when watcher saga sees the action
function* fetchTrendingRepo({ payload: { date } }) {
  try {
    yield put({ type: TRENDING_REPO_LOADING });
    const response = yield call({ context: api, fn: api.getTrendingRepo }, date);
    yield put({ type: TRENDING_REPO_SUCCESS, payload: { items: response.items } });
  }
  catch (error) {
    yield put({ type: TRENDING_REPO_ERROR, payload: { errorMessage: error.message } });
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(TRENDING_REPO_REQUEST, fetchTrendingRepo);
}
