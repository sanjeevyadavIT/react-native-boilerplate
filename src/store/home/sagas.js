import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { api } from '../../services/api';
import {
  TRENDING_REPO_REQUEST,
  TRENDING_REPO_LOADING,
  TRENDING_REPO_SUCCESS,
  TRENDING_REPO_ERROR,
} from './actions';

// worker saga: Fetch Trending repositories when watcher saga sees the action
function* fetchTrendingRepo({ payload }) {
  try {
    yield put({ type: TRENDING_REPO_LOADING });
    const response = yield call({ context: api, fn: api.github.getTrendingRepo }, payload.date);
    yield put({ type: TRENDING_REPO_SUCCESS, payload: { items: response.items } });
  }
  catch (error) {
    yield put({ TRENDING_REPO_ERROR, payload: { error } });
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(TRENDING_REPO_REQUEST, fetchTrendingRepo);
}
