import axios from 'axios';

export const baseUrl = `/api`;
// export const baseUrl = 'http://localhost:3000';

export const localUrlIns = axios.create({
  baseURL: baseUrl,
  'withCredentials':true,
  headers: {
    'Accept':'application/json',
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
  },
});
