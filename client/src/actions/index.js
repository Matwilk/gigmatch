import axios from 'axios';

export const FETCHING_GIG = 'FETCHING_GIG';
export const FETCH_GIG_RESULT = 'FETCH_GIG_RESULT';

const ROOT_URL = 'http://localhost:3001/api';
//const API_KEY = "?key=PAPERCLIP1234";

//export function fetchGig(id) {
//const request = axios.get(`${ROOT_URL}/${id}`);
//console.log('request', request);

// return {
//   type: FETCH_GIG,
//   payload: request
// };
//}

//import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants'
//import getPeople from './api'

export function getGig(id) {
  return {
    type: FETCHING_GIG,
    id
  };
}

export function getGigResult(id, code, data) {
  return {
    type: FETCH_GIG_RESULT,
    id,
    code,
    data
  };
}

export function fetchGig(id) {
  return dispatch => {
    dispatch(getGig(id));
    axios
      .get(`${ROOT_URL}/gig/${id}`)
      .then(data => {
        dispatch(getGigResult(id, 200, data));
      })
      .catch(err => {
        dispatch(getGigResult(id, err.response.status, {}));
      });
  };
}

/////

function fetchMultiple(type, fetchingAction, resultAction) {
  const fetching = type => {
    return {
      type: type
    };
  };

  const fetchingMultiple = (type, code, data) => {
    return {
      type: type,
      code,
      data
    };
  };

  return dispatch => {
    dispatch(fetching(fetchingAction));
    axios
      .get(`${ROOT_URL}/${type}`)
      .then(data => {
        dispatch(fetchingMultiple(resultAction, 200, data));
      })
      .catch(err => {
        dispatch(fetchingMultiple(resultAction, err.response.status, {}));
      });
  };
}

// Gigs

export const FETCHING_GIGS = 'FETCHING_GIGS';
export const FETCH_GIGS_RESULT = 'FETCH_GIGS_SUCCESS';

export function fetchGigs() {
  return fetchMultiple('gig', FETCHING_GIGS, FETCH_GIGS_RESULT);
}

// Bands

export const FETCHING_BANDS = 'FETCHING_BANDS';
export const FETCH_BANDS_RESULT = 'FETCH_BANDS_SUCCESS';

export function fetchBands() {
  return fetchMultiple('band', FETCHING_BANDS, FETCH_BANDS_RESULT);
}
