import axios from 'axios';

export const contactApi = axios.create({
  baseURL: '/api/contact',
});
