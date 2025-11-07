import Course from './../models/Course.Model.js';

export const createCourse=async(req ,res)=>{
   try {

      const {title,description,price,duration,category,instructorName,courseImage}=req.body;

      if(!title ||!description|| !price||!duration||!category||!instructorName||!courseImage){
         return res.status(404).json({
            message:"Please fill in all required fields",
         })
      };

      const course =new Course({
         user:req.user._id,
         title,
         description,
         price,
         duration,
         category,
         instructorName,
         courseImage,
      });

      const createdCourse=await course.save();
      res.status(201).json({
         message:'Course created successfully',
         data:createdCourse
      });

   } catch (error) {
      res.status(500).json({
         message:'Server error during course create',
         error:error.message
      })
   }
}