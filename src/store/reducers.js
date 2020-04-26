import { combineReducers } from 'redux';
import HomeReducer from './home/homeReducer';

export default combineReducers({
  home: HomeReducer,
});
