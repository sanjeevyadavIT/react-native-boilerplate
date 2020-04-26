import { getLastWeekDate } from '../../utils';

export const TRENDING_REPO_REQUEST = 'TRENDING_REPO_REQUEST';
export const TRENDING_REPO_LOADING = 'TRENDING_REPO_LOADING';
export const TRENDING_REPO_SUCCESS = 'TRENDING_REPO_SUCCESS';
export const TRENDING_REPO_ERROR = 'TRENDING_REPO_ERROR';

export const getTrendingRepo = (date = getLastWeekDate()) => ({
  type: TRENDING_REPO_REQUEST,
  payload: { date },
});
