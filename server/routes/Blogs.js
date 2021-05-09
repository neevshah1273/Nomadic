import express from 'express';
import {getBlogs, createBlog} from '../controllers/blogs.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/',auth, getBlogs );
router.post('/',auth, createBlog );

export default router;