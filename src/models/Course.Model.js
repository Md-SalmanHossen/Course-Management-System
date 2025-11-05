import mongoose, { mongo } from "mongoose";

const courseSchema=mongoose.Schema({
   user:{
      type:mongoose.Schema.ObjectId,
      required:true,
      ref:'User'
   },
   title{
      type: String,
      required: true
   },
   description{
      type: String,
      required: true,
   }, 
   price{
      type: String,
      required: true,
   }, 
   duration{
      type: String,
      required: true,
   }, 
   category{
      type: String,
      required: true,
   }, 
   instructorName{
      type: String,
      required: true,
   }, 
   courseImage{
      type: String,
      required: true,
   }
},{
   timestamps:true,
   versionKey:false
});

const Course=mongoose.model('Course',courseSchema);
export default Course;