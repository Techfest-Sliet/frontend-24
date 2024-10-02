<<<<<<< HEAD
import axios from 'axios';

export const baseUrl = 'https://www.techfestsliet.org//api';
// export const baseUrl = 'http://localhost:4030';

export const localUrlIns = axios.create({
  baseURL: baseUrl,
  'withCredentials':true,
  headers: {
    'Content-Type': 'multipart/form-data',
    'Accept':'application/json',
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
  },
});
=======
//export const baseUrl = 'http://localhost:3000';
export const baseUrl = "/api";
>>>>>>> 886c740803faca4d0375855cb42793c9f0653e34
