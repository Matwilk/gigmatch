//import _ from 'lodash';
import { FETCH_GIG } from '../../actions';

export default function(state = {}, action) {
  switch (action.type) {
    // case DELETE_POST:
    //   return _.omit(state, action.payload);
    // case FETCH_POST:
    //
    case FETCH_GIG:
      return { ...state, [action.payload.data._id]: action.payload.data };
    default:
      return state;
  }
}
