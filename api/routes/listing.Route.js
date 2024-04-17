import express from 'express';
import { createListing , deleteListing} from '../controler/listing.controler.js';
import { verifyToken } from '../verification/verifyUser.js';
const router = express.Router();
router.post('/create',verifyToken, createListing);
router.delete('/delete/:id',verifyToken,deleteListing);
export default router;