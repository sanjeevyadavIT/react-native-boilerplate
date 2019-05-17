import { combineReducers } from 'redux';
import HomeReducer from './home/reducer';

export default combineReducers({
  home: HomeReducer,
});
