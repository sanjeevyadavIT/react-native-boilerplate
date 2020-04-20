import {
  TRENDING_REPO_LOADING,
  TRENDING_REPO_SUCCESS,
  TRENDING_REPO_ERROR,
} from './actions';
import Status from '../../services/api/Status';

const initialState = {
  status: Status.DEFAULT,
  errorMessage: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TRENDING_REPO_LOADING:
      return {
        ...state,
        status: Status.LOADING,
      };
    case TRENDING_REPO_SUCCESS:
      return {
        ...state,
        status: Status.SUCCESS,
        items: payload.items,
      };
    case TRENDING_REPO_ERROR:
      return {
        ...state,
        status: Status.ERROR,
        errorMessage: payload.errorMessage,
      }
    default:
      return state;
  }
};
