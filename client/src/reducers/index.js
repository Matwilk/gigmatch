import { combineReducers } from 'redux';
import GigsReducer from './gigs';
import BandsReducer from './bands';

const rootReducer = combineReducers({
  gigs: GigsReducer,
  bands: BandsReducer
});

export default rootReducer;
