import axios from 'axios';

const ROOT_URL = 'http://localhost:3001/api';
//const API_KEY = "?key=PAPERCLIP1234";

export function fetchSingle(id, type, fetchingAction, resultAction) {
  function fetching() {
    return {
      type: fetchingAction,
      id
    };
  }

  function fetchingSingle(code, data) {
    return {
      type: resultAction,
      id,
      code,
      data
    };
  }

  return dispatch => {
    dispatch(fetching());
    axios
      .get(`${ROOT_URL}/${type}/${id}`)
      .then(data => {
        dispatch(fetchingSingle(200, data));
      })
      .catch(err => {
        dispatch(fetchingSingle(err.response.status, {}));
      });
  };
}

/////

function fetchMultiple(type, fetchingAction, resultAction) {
  const fetching = () => {
    return {
      type: fetchingAction
    };
  };

  const fetchingMultiple = (code, data) => {
    return {
      type: resultAction,
      code,
      data
    };
  };

  return dispatch => {
    dispatch(fetching());
    axios
      .get(`${ROOT_URL}/${type}`)
      .then(data => {
        dispatch(fetchingMultiple(200, data));
      })
      .catch(err => {
        dispatch(fetchingMultiple(err.response.status, {}));
      });
  };
}

// Gigs

export const FETCHING_GIG = 'FETCHING_GIG';
export const FETCH_GIG_RESULT = 'FETCH_GIG_RESULT';

export function fetchGig(id) {
  return fetchSingle(id, 'gig', FETCHING_GIG, FETCH_GIG_RESULT);
}

export const FETCHING_GIGS = 'FETCHING_GIGS';
export const FETCH_GIGS_RESULT = 'FETCH_GIGS_RESULT';

export function fetchGigs() {
  return fetchMultiple('gig', FETCHING_GIGS, FETCH_GIGS_RESULT);
}

// Bands

export const FETCHING_BAND = 'FETCHING_BAND';
export const FETCH_BAND_RESULT = 'FETCH_BAND_RESULT';

export function fetchBand(id) {
  return fetchSingle(id, 'band', FETCHING_BAND, FETCH_BAND_RESULT);
}

export const FETCHING_BANDS = 'FETCHING_BANDS';
export const FETCH_BANDS_RESULT = 'FETCH_BANDS_RESULT';

export function fetchBands() {
  return fetchMultiple('band', FETCHING_BANDS, FETCH_BANDS_RESULT);
}
