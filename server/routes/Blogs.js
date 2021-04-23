import express from 'express';
import {getBlogs, createBlog} from '../controllers/blogs.js';

const router = express.Router();

router.get('/', getBlogs );
router.post('/', createBlog );

export default router;