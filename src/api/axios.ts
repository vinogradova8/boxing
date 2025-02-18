import axios from 'axios';

export default axios.create({
  baseURL: 'https://d2t50r4w33jawh.cloudfront.net',
});

export const gallery = axios.create({
  baseURL: 'https://vinogradova8.github.io/boxing/api',
});
