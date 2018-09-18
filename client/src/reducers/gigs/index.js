import _ from 'lodash';
import {
  FETCHING_GIGS,
  FETCH_GIGS_RESULT,
  FETCHING_GIG,
  FETCH_GIG_RESULT
} from '../../actions';

export default function(state = {}, action) {
  switch (action.type) {
    // case DELETE_POST:
    //   return _.omit(state, action.payload);
    // case FETCH_POST:
    //
    case FETCHING_GIGS:
      return {};
    case FETCH_GIGS_RESULT:
      return { ..._.mapKeys(action.data.data, '_id'), code: action.code };
    case FETCHING_GIG:
      return { ...state, [action.id]: null };
    case FETCH_GIG_RESULT:
      return { ...state, code: action.code, [action.id]: action.data.data };
    default:
      return state;
  }
}
