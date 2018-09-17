import axios from 'axios';

export const FETCH_GIG = 'fetch_gig';

const ROOT_URL = 'http://localhost:3001/api/gig';
//const API_KEY = "?key=PAPERCLIP1234";

export function fetchGig(id) {
  const request = axios.get(`${ROOT_URL}/${id}`);
  console.log('request', request);

  return {
    type: FETCH_GIG,
    payload: request
  };
}
