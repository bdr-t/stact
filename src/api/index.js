import axios from 'axios';

const API = axios.create({ baseURL: 'https://reqres.in/api' });

export const fetchPosts = () => API.get(`/users`);
export const signIn = () => API.post('/login');
