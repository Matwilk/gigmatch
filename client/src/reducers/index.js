import { combineReducers } from 'redux';
import GigsReducer from './gigs';

const rootReducer = combineReducers({
  gigs: GigsReducer
});

export default rootReducer;
