import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'});

export const fetchBlogs = () => API.get('/blogs');
export const createBlogs = (newBlog) => API.post('/blogs',newBlog);

export const signIn = (formData) => API.post('/user/signin', formData);

export const signUp = (formData) => API.post('/user/signup', formData);

export const userDetails = (username) => API.get(`/users/${username}`);

export const userAvl = (username) => API.get('/user/Avl',username);