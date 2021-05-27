import express from 'express';
import {getUsers} from '../controllers/usersd.js';
//import { getUsers } from '../controllers/usersd.js';


const router = express.Router();


router.get('/:username',getUsers);

export default router;