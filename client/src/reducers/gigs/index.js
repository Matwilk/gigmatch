import _ from 'lodash';
import {
  FETCHING_GIGS,
  FETCH_GIGS_RESULT,
  FETCHING_GIG,
  FETCH_GIG_RESULT
} from '../../actions';

export default function(state = { list: {} }, action) {
  let newState = {};

  switch (action.type) {
    // case DELETE_POST:
    //   return _.omit(state, action.payload);
    // case FETCH_POST:
    //
    case FETCHING_GIGS:
      return {};
    case FETCH_GIGS_RESULT:
      return {
        list: { ..._.mapKeys(action.data.data, '_id') },
        code: action.code
      };
    case FETCHING_GIG:
      newState = { ...state };
      newState.list[action.id] = null;
      return newState;
    case FETCH_GIG_RESULT:
      newState = { ...state };
      newState.code = action.code;
      newState.list[action.id] = action.data.data;
      return newState;
    default:
      return state;
  }
}
