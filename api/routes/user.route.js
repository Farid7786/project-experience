import express from 'express';
import {deleteUser, test, updateUser,getUserListings,getUser} from '../controler/user.controler.js'
import { verifyToken } from '../verification/verifyUser.js';

 const router = express.Router();

 router.get('/test', test);
 router.post('/update/:id',verifyToken, updateUser);
 router.delete('/delete/:id',verifyToken, deleteUser)
 router.get('/listing/:id',verifyToken,getUserListings);
 router.get('/:id',verifyToken,getUser);
 export default router;