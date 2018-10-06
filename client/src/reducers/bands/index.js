import _ from 'lodash';
import {
  FETCHING_BANDS,
  FETCH_BANDS_RESULT,
  FETCHING_BAND,
  FETCH_BAND_RESULT
} from '../../actions';

export default function(state = { list: {} }, action) {
  let newState = {};

  switch (action.type) {
    // case DELETE_POST:
    //   return _.omit(state, action.payload);
    // case FETCH_POST:
    //
    case FETCHING_BANDS:
      return {};
    case FETCH_BANDS_RESULT:
      return {
        list: { ..._.mapKeys(action.data.data, '_id') },
        code: action.code
      };
    case FETCHING_BAND:
      newState = { ...state };
      newState.list[action.id] = null;
      return newState;
    case FETCH_BAND_RESULT:
      newState = { ...state };
      newState.code = action.code;
      newState.list[action.id] = action.data.data;
      return newState;
    default:
      return state;
  }
}
