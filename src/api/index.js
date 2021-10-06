import axios from 'axios';
import token from './apiToken';

const API = axios.create({
  baseURL: 'https://api.s.unit.sh',
});

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/vnd.api+json',
  },
};

// API.interceptors.request.use((req) => {
//   req.headers.Authorization = `Bearer ${token}`;
//   return req;
// });

export const creatApplication = (appData) =>
  API.post('/applications', appData, config);
export const getAllCustomers = () => API.get('/customers', config);
export const getAllApplications = () =>
  API.get(`/applications?page[limit]=10&page[offset]=0&include=org`, config);
export const getAllAccounts = () => API.get('/accounts', config);
export const creatAccount = (data) => API.post('/accounts', data, config);

export const addPay = (formData) =>
  API.post('/sandbox/wire-payments', formData, config);
export const signUp = (formData) => API.post('/user/signup', formData);
