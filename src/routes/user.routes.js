import express from 'express';
import *as user from '../controllers/user.controller.js'


const router=express.Router();

router.post('/register',user.register);
router.get('/login',user.login);

export default router;