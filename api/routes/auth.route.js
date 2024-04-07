import express, { Router } from 'express'
import { signin, signup } from '../controler/auth.controler.js'

const router = express.Router();
router.post('/signup',signup)
router.post('/signin', signin);
export default router