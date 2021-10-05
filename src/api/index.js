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
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
