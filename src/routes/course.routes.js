import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import *as course from '../controllers/course.controller.js';

const router=express.Router();

router.post('/profile',authMiddleware,course.createCourse);
router.get('/profile/:id',authMiddleware,course.getCourseById);
router.put('/profile',authMiddleware,course.updateCourse);
router.delete('/profile',authMiddleware,course.deleteCourse);

export default router;