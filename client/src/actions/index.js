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

export const FETCHING_GIGS = 'FETCHING_GIGS';
export const FETCH_GIGS_RESULT = 'FETCH_GIGS_SUCCESS';

export function getGigs() {
  return {
    type: FETCHING_GIGS
  };
}

export function getGigsResult(code, data) {
  return {
    type: FETCH_GIGS_RESULT,
    code,
    data
  };
}

export function fetchGigs() {
  return dispatch => {
    dispatch(getGigs());
    axios
      .get(`${ROOT_URL}/gigs`)
      .then(data => {
        dispatch(getGigsResult(200, data));
      })
      .catch(err => {
        dispatch(getGigsResult(err.response.status, {}));
      });
  };
}
