import express from 'express';
import { createListing } from '../controler/listing.controler.js';
import { verifyToken } from '../verification/verifyUser.js';
const router =express.Router();
router.post('/create',verifyToken, createListing);
export default router;