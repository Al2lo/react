import { combineReducers } from 'redux';
import vacation_reducer from './vacation_reducer';
import filter_reducer from './filter_reducer';

export default combineReducers({vacation_reducer,filter_reducer});