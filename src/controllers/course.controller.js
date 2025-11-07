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

export const getCourseById=async(req ,res)=>{
   try {

      const course =await Course.findById(req.params.id);
      
      if(!course){
         return res.status(404).json({
            message:'Course not found',
         })
      }

      res.status(200).json({
         message:"Course fetched successfully",
         data:course
      });

   } catch (error) {
      res.status(500).json({
         message:"Server error during fetched all course",
         error:error.message
      })
   }
}

export const updateCourse=async(req ,res)=>{
   try {

      const id=req.params.id;
      const course=await Course.findById(id);

      if(course.user.toString()!==req.user._id.toString()){
         return res.status(401).json({
            message:'Not authorized to update this course'
         })
      };

      course.title=req.body.title||course.title;
      course.description=req.body.description||course.description;
      course.price=req.body.price||course.price;
      course.duration=req.body.duration||course.duration;
      course.category=req.body.category||course.category;
      course.instructorName=req.body.instructorName||course.instructorName;
      course.courseImage=req.body.courseImage||course.courseImage;

      const updateCourse=await course.save();
      console.log('Course updated by: ',req.user._id);

      res.status(200).json({
         message:"Course update successfully",
         updated_data:updateCourse,
      })

   } catch (error) {
      res.status(500).json({
         message:'Server error during update course',
         error:error.message
      });
   }
}

export const deleteCourse=async(req ,res)=>{
   try {
      
      const id=req.params.id;
      const course=await Course.findById(id);
      
      if(!course){
         return res.status(404).json({
            message:'Course not found'
         });
      }

      if(course.user.toString()!==req.user._id.toString()){
         return res.status(401).json({
            message:'Not authorized to delete this course',
         })
      }

      const deleteCourse=await course.deleteOne();
      res.status(200).json({
         message:'Course deleted successfully',
         deleted_data:deleteCourse
      });

   } catch (error) {
      res.status(500).json({
         message:'Server error during delete course',
         error:error.message
      })
   }
}