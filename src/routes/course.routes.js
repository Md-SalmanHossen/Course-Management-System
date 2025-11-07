import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import *as course from '../controllers/course.controller.js';

const router=express.Router();

router.post('/',authMiddleware,course.createCourse);
router.get('/:id',authMiddleware,course.getCourseById);
router.put('/:id',authMiddleware,course.updateCourse);
router.delete('/:id',authMiddleware,course.deleteCourse);

export default router;