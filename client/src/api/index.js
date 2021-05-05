import axios from 'axios';

const url = 'http://localhost:5000/blogs';

export const fetchBlogs = () => axios.get(url);
export const createBlogs = (newBlog) => axios.post(url,newBlog);