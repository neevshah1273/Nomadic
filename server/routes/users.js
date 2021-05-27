import express from 'express';
import {signin,signup,UserAvl} from '../controllers/users.js';

const router = express.Router();

router.post('/signin',signin);
router.post('/signup',signup);

//router.get('/detail',getUsers);
router.get('/Avl',UserAvl);

export default router;