import axios from 'axios';
import token from './apiToken';

const API = axios.create({
  baseURL: 'https://api.s.unit.sh',
});

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

// API.interceptors.request.use((req) => {
//   req.headers.Authorization = `Bearer ${token}`;
//   return req;
// });

export const createApplication = (appData) =>
  API.post('/applications', appData);
export const getAllCustomers = () => API.get('/customers', config);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
