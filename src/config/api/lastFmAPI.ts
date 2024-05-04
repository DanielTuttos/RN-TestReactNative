import axios from 'axios';
import {API_KEY} from '@env';

const lastFmApi = axios.create({
  baseURL: 'https://ws.audioscrobbler.com/',
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: API_KEY,
    format: 'json',
  },
});

export {lastFmApi};
