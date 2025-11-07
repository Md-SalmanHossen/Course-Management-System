import express from 'express';
import *as user from '../controllers/user.controller.js'
import authMiddleware from './../middlewares/auth.middleware.js';


const router=express.Router();

router.post('/register',user.register);
router.post('/login',user.login);

router.put('/profile',authMiddleware,user.updateProfile);
router.get('/profile',authMiddleware,user.getUserProfile);

export default router;